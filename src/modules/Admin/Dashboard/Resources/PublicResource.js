import React, { Component } from 'react'
// import { Videos }  from "./Videos";

import emptybox from "../../../../assets/images/emptybox.svg"

import styles from "./PublicResource.module.scss";
import { Row, Col, Avatar, Spin } from 'antd';
import { EllipsisOutlined, UserOutlined, ShareAltOutlined } from '@ant-design/icons';
import { getPublicResourceAction } from './actions/publicResourceActionTypes';
import { connect } from 'react-redux';
import { getToken } from '../../../../utils/localStorage';
import ResourceDetails from './components/ResourceDetails';

class PublicResources extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible : false,
            isOpen: false,
            playing : true,
            isPublic : false,
            token : getToken("token"),
            resourceDetail : {},
            isVideo : false
        };
        this.openModal = this.openModal.bind(this);
    }

    openModal (resource) {
        if(resource.resourceType === 'videos'){
            this.setState({
                isVideo : true
            }) 
        }else{
            this.setState({
                isVideo : false 
            })
        }
        this.setState({
            isOpen: true,
            resourceDetail: resource
        })
    }
    componentDidMount(){
        const token = getToken("token");
        this.props.getPublicResources(token);
    }

    render() {
        return (
            <div className={styles.container}>
                <div>
                    <h1 className={styles.heading}>Public Resources</h1>
                </div>
                <Row gutter={[16,16]}>
                    {
                        this.props.publicResource ?
                        this.props.publicResource.length > 0 ?
                        this.props.publicResource.map((resource,index) => (
                    <Col className={styles.cardWrapper} xs={24} sm={12} md={12} lg={6} xl={5} key="1">
                        <div className={styles.infoWrapper}>
                            <div className={styles.userInfoContainer}>
                                <Avatar style={{ backgroundColor: 'dodgerblue' }} size="small" icon={<UserOutlined />} /> 
                                <div className={styles.username}>
                                    <span>{resource.user.username}</span>
                                </div>
                            </div>
                            <div className={styles.moreSettings}>
                                <EllipsisOutlined />
                            </div>
                        </div>
                        <div onClick={() => this.openModal(resource)}  className={styles.playerWrapper}>
                            <img src="https://img.icons8.com/material-outlined/48/000000/video.png" alt="video icon"/>
                        </div>
                        <div className={styles.bottomContainer}>
                            <div className={styles.resourceNameContainer}>
                                <span className={styles.resourceName}>{resource.resourceName}</span>
                            </div>
                            <div className={styles.viewsContainer}>
                                <span className={styles.views}>2,344 views</span>
                            </div>
                            <div className={styles.socialContainer}>
                                <div className={styles.uploadedAt}>
                                    <span>4 hours ago</span>
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
                        isVideo={this.state.isVideo}
                        />
                    </>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        publicResource : state.publicResource.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    getPublicResources : (token) => {   
        dispatch(getPublicResourceAction(token));
    }   
}
}

export default connect(mapStateToProps,mapDispatchToProps)(PublicResources);
