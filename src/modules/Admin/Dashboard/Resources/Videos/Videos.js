import React, { Component } from 'react'
import { Row, Col, Button,Spin, Avatar, Badge, Select, Input, Menu, Dropdown } from 'antd';
import { PlusSquareOutlined, ShareAltOutlined, EllipsisOutlined, UserOutlined, DeleteOutlined } from '@ant-design/icons';
import emptybox from "../../../../../assets/images/emptybox.svg";
// imports 
import UploadForm from './VideoUploadForm';

// styles
import styles from  "./Videos.module.scss";
import { addPrivateVideosAction, getPrivateVideosAction, deletePrivateVideosAction, searchPrivateVideosAction, filterPrivateVideosAction } from '../actions/privateVideosActionTypes';
import { getToken } from '../../../../../utils/localStorage';
import { connect } from 'react-redux';
import { getCategoryAction } from '../actions/categoryActionTypes';
import ResourceDetails from '../components/ResourceDetails';
import { makeResourcePublicOrPrivateAction } from '../actions';

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
        if(this.props.videos.length <= 0 ){
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
        this.props.filterPrivateVideos(value,this.state.token);
    }
      
    // onBlur() {
    //     console.log('blur');
    // }
      
    // onFocus() {
    //     console.log('focus');
    // }
      
    onSearch(val) {
        console.log('search:', val);
        this.props.searchPrivateVideos(val,this.state.token);
        // if()
    }

    onReset(){
        this.props.getPrivateVideos(this.state.token);
    }


    render() {
        const { isPrivate } = this.state;
        const moreDropdown = (
            <Menu style={{padding:'.2rem 0rem'}}>
              <Menu.Item key="0" icon={<DeleteOutlined />}>
                Remove
              </Menu.Item>
              <Menu.Item key="1" >
                Make Public
              </Menu.Item>
              {/* <Menu.Item key="3">3rd menu item</Menu.Item> */}
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
                            // onFocus={this.onFocus}
                            // onBlur={this.onBlur}
                            // onSearch={this.onSearch}
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
                            onCreate={this.onCreate}
                            onCancel={() => {
                            this.setState({
                                visible : false
                            })
                            }}
                            parentProps={this.props}
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
                                    {/* <span>
                                        <Switch
                                            unCheckedChildren="Private"
                                            checkedChildren="Public"
                                            size="small"
                                            checked={isPrivate}
                                            onChange={val => {
                                                this.setState({ isPrivate : val });
                                            }}
                                            />
                                    </span> */}
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
                        <Col className={styles.emptyContainer}>
                            <img src={emptybox} alt="empty box" />
                            <div>No record found</div>
                            <h4>Try adding new records.</h4>
                        </Col>
                        : <Col style={{margin : "0 auto"}}> 
                            <Spin size="large" />
                          </Col>
                    }
                     <>
                         {/* <Modal width="800px" footer={null} visible={this.state.isOpen} onCancel={() => this.setState({isOpen: false,playing : false})} >
                         <div className={styles.playerModalWrapper}>
                            <ReactPlayer
                            className={styles.reactPlayer}
                            controls
                            playing={this.state.playing}
                            url={this.state.url}
                            width='100%'
                            height='100%'
                            />
                        </div>
                        </Modal> */}
                        <ResourceDetails
                        resource={this.state.resourceDetail}
                        toggleResourceDetailModal={this.state.isOpen}
                        onCancel={() => this.setState({isOpen: false,playing : false})}
                        playing={this.state.playing}
                        privateSection={true}
                        isVideo={true}
                        />
                    </>
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
    searchPrivateVideos : (searchText,token) =>{
        dispatch(searchPrivateVideosAction(searchText,token));
    },
    filterPrivateVideos : (category,token) =>{
        dispatch(filterPrivateVideosAction(category,token));
    },
    makeResourcePublicOrPrivate :(id,check) =>{
        dispatch(makeResourcePublicOrPrivateAction(id,check));
    }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Videos);
