import React, { Component } from 'react'
import { Row, Col, Button,Spin, Avatar, Badge, Select, Input, Menu, Dropdown } from 'antd';
import { PlusSquareOutlined, ShareAltOutlined, EllipsisOutlined, UserOutlined, DeleteOutlined } from '@ant-design/icons';
// imports 
// import UploadForm from './VideoUploadForm';

// styles
import styles from  "./Videos.module.scss";
import { addPrivateVideosAction, getPrivateVideosAction, deletePrivateVideosAction, searchPrivateVideosAction, filterPrivateVideosAction, makeVideosPublicOrPrivateAction } from '../actions/privateVideosActionTypes';
import { getToken } from '../../../../../utils/localStorage';
import { connect } from 'react-redux';
import { getCategoryAction } from '../actions/categoryActionTypes';
import ResourceDetails from '../components/ResourceDetails';
import UploadForm from '../components/UploadForm';
import EmptyBox from '../components/EmptyBox';

const { Search } = Input;
const { Option } = Select;


class Videos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible : false,
            isOpen: false,
            playing : true,
            isPublic : false,
            token : getToken("token"),
            resourceDetail : {}
        };
        this.openModal = this.openModal.bind(this);

      }


    openModal (resource) {
        this.setState({
            isOpen: true,
            resourceDetail: resource
        })
    }
    
    componentDidMount(){
        if(this.props.videos.length <= 0 || Array.isArray(this.props.videos) ){
            this.props.getPrivateVideos(this.state.token);
            this.props.getCategories();
        }
    }

    getUploadedDays =(postedAt) =>{
        return postedAt;
    }

    onCreate = () => {
        this.setState({
            visible : false        
        })
    };
    onChange(value) {
        console.log(`selected ${value}`);
        this.props.filterPrivateVideos(value,this.state.token,'videos');
    }
      
    onSearch(val) {
        console.log('search:', val);
        this.props.searchPrivateVideos(val,this.state.token,'videos');
        // if()
    }

    onReset(){
        this.props.getPrivateVideos(this.state.token);
    }


    render() {
        const moreDropdown = (
            <Menu style={{padding:'.2rem 0rem'}}>
              <Menu.Item key="0" icon={<DeleteOutlined />}>
                Remove
              </Menu.Item>
            </Menu>
          );
        return (
            <div className={styles.container}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{paddingBottom:"2rem"}}>
                    <Col xs={24} sm={24} md={16} lg={18} xl={20}>
                        <div className={styles.searchFilterContainer}>
                        <Search className={styles.searchBar} placeholder="input search text" onSearch={(value)=> this.onSearch(value)} enterButton onReset={()=> this.onReset()}/>
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select a category"
                            optionFilterProp="children"
                            onChange={(value)=> this.onChange(value)}
                            filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {
                                this.props.categories ? 
                                this.props.categories.map((category,index)=> (
                                    <Option key={index} value={category.categoryName}>{category.categoryName}</Option>
                                ))
                                : <Option value="">No Category</Option>
                            }
                        </Select>
                        <Button className={styles.resetButton} type="default" onClick={()=> this.onReset()} >Reset</Button>
                        </div>
                        {/* <h1 style={{fontSize:"1rem"}}>Videos</h1> */}
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={6} xl={4}>
                        <Button
                            type="primary"
                            onClick={() => {
                            this.setState({visible : true})
                            }}
                        >
                            <PlusSquareOutlined /> Add Video
                        </Button>
                        <UploadForm
                            visible={this.state.visible}
                            isVideo={true}
                            onCreate={this.onCreate}
                            onCancel={() => {
                            this.setState({
                                visible : false
                            })
                            }}
                            onUpload={this.props.onUpload}
                            categories={this.props.categories}
                        />
                    </Col>
                </Row>
                <Row gutter={[16,16]} className={styles.rowContainer}>
                    {   
                        this.props.videos ?
                        this.props.videos.length > 0 ?
                        this.props.videos.map((resource,index) => (
                        <Col className={styles.cardWrapper} xs={24} sm={12} md={8} lg={8} xl={5} key={resource.id}>
                            <div className={styles.infoWrapper}>
                                <div className={styles.userInfoContainer}>
                                    <Avatar style={{ backgroundColor: '#aed9b4' }} size="small" icon={<UserOutlined />} /> 
                                    <div className={styles.username}>
                                        <span>{resource.user.username}</span>
                                    </div>
                                </div>
                                <div className={styles.moreSettings}>
                                <Dropdown overlay={moreDropdown} trigger={['click']}>
                                       <a href="" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    <EllipsisOutlined />
                                    </a>
                                </Dropdown>
                                </div>
                            </div>
                            <div onClick={() => this.openModal(resource)} className={styles.playerWrapper}>
                                <img src="https://img.icons8.com/material-outlined/48/000000/video.png" alt="video icon"/>
                            </div>
                            <div className={styles.bottomContainer}>
                                <div className={styles.resourceNameContainer}>
                                    <span className={styles.resourceName}>{resource.resourceName}</span>
                                </div>
                                <div className={styles.viewsContainer}>
                                    <div>
                                        <Badge count={resource.category} style={{backgroundColor:"#f48c06"}} className={styles.leftTags} />
                                    </div>
                                    <div>
                                        {
                                            resource.isPublic ?
                                            <Badge count="Public" style={{backgroundColor:"#f48c06"}} className={styles.rightTags} />
                                            :
                                            <Badge count="Private" style={{backgroundColor:"#f48c06"}} className={styles.rightTags} />
                                        }
                                        <Badge count={resource.resourceType} style={{backgroundColor:"#f48c06"}} className={styles.rightTags} />
                                    </div>
                                </div>
                                <div className={styles.socialContainer}>
                                    <div className={styles.uploadedAt}>
                                        <span>24 hours ago</span>
                                    </div>
                                    <div className={styles.socialIconsContainer}>
                                        <div className={styles.icons}>
                                        <ShareAltOutlined size={24}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        </Col>
                        )) 
                        :
                        <EmptyBox />
                        : <Col style={{margin : "0 auto"}}> 
                            <Spin size="large" />
                          </Col>
                    }
                    <ResourceDetails
                        resource={this.state.resourceDetail}
                        toggleResourceDetailModal={this.state.isOpen}
                        onCancel={() => this.setState({isOpen: false,playing : false})}
                        playing={this.state.playing}
                        privateSection={true}
                        isVideo={true}
                        makeVideosPublicOrPrivate={this.props.makeVideosPublicOrPrivate}
                        getResources={this.props.getPrivateVideos}
                    />
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        videos : state.privateVideos.data,
        categories : state.categories.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    onUpload: (resource,token) => {
        dispatch(addPrivateVideosAction(resource,token));
    },
    getPrivateVideos : (token) => {
        dispatch(getPrivateVideosAction(token));
    },
    getCategories : () => {
        dispatch(getCategoryAction());
    },
    deletePrivateVideos : (id,resourceId,token) =>{
        dispatch(deletePrivateVideosAction(id,resourceId,token));
    },
    searchPrivateVideos : (searchText,token,resourceType) =>{
        dispatch(searchPrivateVideosAction(searchText,token,resourceType));
    },
    filterPrivateVideos : (category,token,resourceType) =>{
        dispatch(filterPrivateVideosAction(category,token,resourceType));
    },
    makeVideosPublicOrPrivate :(data,token) =>{
        dispatch(makeVideosPublicOrPrivateAction(data,token));
    }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Videos);
