import React, { Component } from 'react'
import { Row, Col, Button,Spin, Avatar, Badge, Select, Input } from 'antd';
import { PlusSquareOutlined, ShareAltOutlined, UserOutlined, EllipsisOutlined } from '@ant-design/icons';

// styles
import styles from  "./Articles.module.scss";
import { addPrivateArticlesAction, getPrivateArticlesAction, deletePrivateArticlesAction, searchPrivateArticlesAction, filterPrivateArticlesAction } from '../actions/privateArticlesActionTypes';
import { getToken } from '../../../../../utils/localStorage';
import { connect } from 'react-redux';
import { getCategoryAction } from '../actions/categoryActionTypes';
import ResourceDetails from '../components/ResourceDetails';
import UploadForm from '../components/UploadForm';
import EmptyBox from '../components/EmptyBox';

const { Search } = Input;
const { Option } = Select;


class Articles extends Component {
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
        this.props.getPrivateArticles(this.state.token);
        this.props.getCategories();
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
        this.props.filterPrivateArticles(value,this.state.token);
    }

    onSearch(val) {
        console.log('search:', val);
        this.props.searchPrivateArticles(val,this.state.token);
    }
    onReset(){
        this.props.getPrivateArticles(this.state.token);
    }

    render() {
        return (
            <div className={styles.container}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{paddingBottom:"2rem"}}>
                    <Col xs={24} sm={24} md={16} lg={18} xl={20}>
                    <div className={styles.searchFilterContainer}>
                        <Search className={styles.searchBar} placeholder="input search text" onSearch={value => this.onSearch(value)} enterButton required />
                        <Select
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
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={6} xl={4}>
                        <Button
                            type="primary"
                            onClick={() => {
                            this.setState({visible : true})
                            }}
                        >
                            <PlusSquareOutlined /> Add Article
                        </Button>
                        <UploadForm
                            visible={this.state.visible}
                            isVideo={false}
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
                <Row gutter={[16,16]} >
                    {   
                        this.props.articles ?
                        this.props.articles.length > 0 ?
                        this.props.articles.map((resource,index) => (
                        <Col className={styles.cardWrapper} xs={24} sm={12} md={8} lg={8} xl={5} key={resource.id}>
                            <div className={styles.infoWrapper}>
                                <div className={styles.userInfoContainer}>
                                    <Avatar style={{ backgroundColor: '#aed9b4' }} size="small" icon={<UserOutlined />} /> 
                                    <div className={styles.username}>
                                        <span>{resource.user.username}</span>
                                    </div>
                                </div>
                                <div className={styles.moreSettings}>
                                    <EllipsisOutlined />
                                </div>
                            </div>
                            <div onClick={() => this.openModal(resource)}    className={styles.articleWrapper}>
                                <img src="https://img.icons8.com/ios/50/000000/google-docs.png" alt="article icon"/>
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
                        :
                        <Col style={{margin : "0 auto"}}> 
                            <Spin size="large" />
                        </Col>
                    }
                    <ResourceDetails
                        resource={this.state.resourceDetail}
                        toggleResourceDetailModal={this.state.isOpen}
                        onCancel={() => this.setState({isOpen: false,playing : false})}
                        playing={this.state.playing}
                        privateSection={false}
                        isVideo={false}
                        />
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles : state.privateArticles.data,
        categories : state.categories.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    onUpload: (resource,token) => {
        dispatch(addPrivateArticlesAction(resource,token));
    },
    getPrivateArticles : (token) => {
        dispatch(getPrivateArticlesAction(token));
    },
    getCategories : () => {
        dispatch(getCategoryAction());
    },
    deletePrivateArticles : (id,resourceId,token) =>{
        dispatch(deletePrivateArticlesAction(id,resourceId,token));
    },
    searchPrivateArticles : (searchText,token) =>{
        dispatch(searchPrivateArticlesAction(searchText,token));
    },
    filterPrivateArticles : (category,token) =>{
        dispatch(filterPrivateArticlesAction(category,token));
    }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Articles);
