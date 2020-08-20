import React, { Component } from 'react'
import { Row, Col, Button,Spin, Popconfirm, Avatar, Badge } from 'antd';
import { PlusSquareOutlined,QuestionCircleOutlined, DeleteOutlined, ShareAltOutlined, SendOutlined, EllipsisOutlined, UserOutlined } from '@ant-design/icons';
// import ModalVideo from 'react-modal-video'
// import PropTypes from 'prop-types'

// imports 
import UploadForm from './VideoUploadForm';

// styles
import styles from  "./Videos.module.scss";
import { addResourceAction, getResourceAction, deleteResourceAction } from '../actions';
import { getToken } from '../../../../../utils/localStorage';
import { connect } from 'react-redux';
import Modal from 'antd/lib/modal/Modal';
import ReactPlayer from 'react-player';

class Videos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible : false,
            isOpen: false,
            url : "",
            playing : true
        };
        this.openModal = this.openModal.bind(this)
      }

    openModal (url) {
        this.setState({isOpen: true,url:url})
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


    render() {
        return (
            <div className={styles.container}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{paddingBottom:"2rem"}}>
                    <Col xs={24} sm={24} md={16} lg={18} xl={20}>
                        <h1 style={{fontSize:"1rem"}}>Videos</h1>
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
                <Row gutter={[16,16]}>
                    {   
                        this.props.data ?
                        this.props.data.map((resource,index) => (
                        <Col onClick={() => this.openModal(resource.resourceLink)} className={styles.cardWrapper} xs={24} sm={12} md={8} lg={8} xl={5} key={resource.id}>
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
                                <img src="https://img.icons8.com/material-outlined/48/000000/video.png"/>
                            </div>
                            <div className={styles.bottomContainer}>
                                <div className={styles.resourceNameContainer}>
                                    <span className={styles.resourceName}>{resource.resourceName}</span>
                                </div>
                                <div className={styles.viewsContainer}>
                                    <Badge count={resource.resourceCategory} className={styles.tags} />
                                    <Badge count={"Video"} className={styles.tags} />
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
                        : <Col style={{margin : "auto 0"}}> 
                            <Spin />
                          </Col>
                    }
                     <>
                         <Modal width="800px" footer={null} visible={this.state.isOpen} onCancel={() => this.setState({isOpen: false,playing : false})} >
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
                         </Modal>
                    </>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data : state.resources.data
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

export default connect(mapStateToProps,mapDispatchToProps)(Videos);
