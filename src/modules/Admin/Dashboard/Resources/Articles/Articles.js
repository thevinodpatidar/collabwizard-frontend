import React, { Component } from 'react'
import { Row, Col, Button,Spin, Avatar, Badge, Select, Input, Result } from 'antd';
import { PlusSquareOutlined, ShareAltOutlined, UserOutlined, EllipsisOutlined } from '@ant-design/icons';
import emptybox from "../../../../../assets/images/emptybox.svg";

// imports 
import UploadForm from './UploadArticleForm';

// styles
import styles from  "./Articles.module.scss";
import { addResourceAction, getResourceAction, deleteResourceAction } from '../actions';
import { getToken } from '../../../../../utils/localStorage';
import { connect } from 'react-redux';
const { Search } = Input;
const { Option } = Select;

class Articles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible : false
        };
      }

    componentDidMount(){
        const token = getToken("token");
        this.props.getResources(token);
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
    }
      
    onBlur() {
        console.log('blur');
    }
      
    onFocus() {
        console.log('focus');
    }
      
    onSearch(val) {
        console.log('search:', val);
    }

    render() {
        return (
            <div className={styles.container}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{paddingBottom:"2rem"}}>
                    <Col xs={24} sm={24} md={16} lg={18} xl={20}>
                    <div className={styles.searchFilterContainer}>
                        <Search className={styles.searchBar} placeholder="input search text" onSearch={value => console.log(value)} enterButton />
                        <Select
                            // showSearch
                            style={{ width: 200 }}
                            placeholder="Select a category"
                            optionFilterProp="children"
                            onChange={this.onChange}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            // onSearch={this.onSearch}
                            filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="maths">Maths</Option>
                            <Option value="english">English</Option>
                            <Option value="science">Science</Option>
                        </Select>
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
                <Row gutter={[16,16]} >
                    {   
                        this.props.articles ?
                        this.props.articles.length > 0 ?
                        this.props.articles.map((resource,index) => (
                        <Col className={styles.cardWrapper} xs={24} sm={12} md={8} lg={8} xl={5} key={resource.id}>
                            <div className={styles.infoWrapper}>
                                <div className={styles.userInfoContainer}>
                                    <Avatar style={{ backgroundColor: 'dodgerblue' }} size="small" icon={<UserOutlined />} /> 
                                    <div className={styles.username}>
                                        <span>{resource.User.username}</span>
                                    </div>
                                </div>
                                <div className={styles.moreSettings}>
                                    <EllipsisOutlined />
                                </div>
                            </div>
                            <div className={styles.playerWrapper}>
                            <img src="https://img.icons8.com/ios/50/000000/google-docs.png" alt="article icon"/>
                            </div>
                            <div className={styles.bottomContainer}>
                                <div className={styles.resourceNameContainer}>
                                    <span className={styles.resourceName}>{resource.resourceName}</span>
                                </div>
                                <div className={styles.viewsContainer}>
                                    <div>
                                        <Badge count={"Maths"} style={{backgroundColor:"#74b9ff"}} className={styles.leftTags} />
                                    </div>
                                    <div>
                                        <Badge count={resource.resourceCategory} style={{backgroundColor:"#0984e3"}} className={styles.rightTags} />
                                        <Badge count={"Video"} style={{backgroundColor:"#0984e3"}} className={styles.rightTags} />
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
                        )) :
                        <Col className={styles.emptyContainer}>
                            {/* <div > */}
                                <img src={emptybox} alt="empty box" />
                                <div>No record found</div>
                                <h4>Try adding new records.</h4>
                            {/* </div> */}
                        </Col>
                        :
                        <Col style={{margin : "0 auto"}}> 
                            <Spin size="large" />
                        </Col>
                    }
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles : state.resources.data.articles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    onUpload: (resource,token) => {
        dispatch(addResourceAction(resource,token));
    },
    getResources : (token) => {
        dispatch(getResourceAction(token));
    },
    deleteResource : (id,resourceId,token) =>{
        dispatch(deleteResourceAction(id,resourceId,token));
    }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Articles);
