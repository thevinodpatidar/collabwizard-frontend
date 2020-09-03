import React, { Component } from 'react'

import styles from "./PublicResource.module.scss";
import { Row, Col, Avatar, Spin } from 'antd';
import { EllipsisOutlined, UserOutlined, ShareAltOutlined } from '@ant-design/icons';
import { getPublicResourceAction } from './actions/publicResourceActionTypes';
import { connect } from 'react-redux';
import { getToken } from '../../../../utils/localStorage';
import ResourceDetails from './components/ResourceDetails';
import EmptyBox from './components/EmptyBox';

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
                            {
                                resource.resourceType === 'videos' ? 
                                    <img src="https://img.icons8.com/material-outlined/48/000000/video.png" alt="video icon"/>
                                :
                                    <img src="https://img.icons8.com/ios/50/000000/google-docs.png" alt="article icon"/>
                            }
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
                        isVideo={ this.state.resourceDetail.resourceType === 'videos' ? true : false}
                    />
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
