import React, { Component } from 'react'
// import { Videos }  from "./Videos";

import styles from "./PublicResource.module.scss";
import { Row, Col, Avatar } from 'antd';
import { EllipsisOutlined, UserOutlined, ShareAltOutlined, SendOutlined } from '@ant-design/icons';

class PublicResources extends Component {

    render() {
        return (
            <div className={styles.container}>
                <div>
                    <h1 className={styles.heading}>Public Resources</h1>
                </div>
                <Row gutter={[16,16]}>
                    <Col className={styles.cardWrapper} xs={24} sm={12} md={8} lg={8} xl={5} key="1">
                        <div className={styles.infoWrapper}>
                            <div className={styles.userInfoContainer}>
                                <Avatar style={{ backgroundColor: 'dodgerblue' }} size="small" icon={<UserOutlined />} /> 
                                <div className={styles.username}>
                                    <span>Vinod Patidar</span>
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
                                <span className={styles.resourceName}>JavaScript - Closure</span>
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
                    <Col className={styles.cardWrapper} xs={24} sm={12} md={8} lg={8} xl={5} key="1">
                        <div className={styles.infoWrapper}>
                            <div className={styles.userInfoContainer}>
                                <Avatar style={{ backgroundColor: 'dodgerblue' }} size="small" icon={<UserOutlined />} /> 
                                <div className={styles.username}>
                                    <span>Vinod Patidar</span>
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
                                <span className={styles.resourceName}>JavaScript - Closure</span>
                            </div>
                            <div className={styles.viewsContainer}>
                                <span className={styles.views}>144 views</span>
                            </div>
                            <div className={styles.socialContainer}>
                                <div className={styles.uploadedAt}>
                                    <span>12 hours ago</span>
                                </div>
                                <div className={styles.socialIconsContainer}>
                                    <div className={styles.icons}>
                                    <ShareAltOutlined size={24}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className={styles.cardWrapper} xs={24} sm={12} md={8} lg={8} xl={5} key="1">
                        <div className={styles.infoWrapper}>
                            <div className={styles.userInfoContainer}>
                                <Avatar style={{ backgroundColor: 'dodgerblue' }} size="small" icon={<UserOutlined />} /> 
                                <div className={styles.username}>
                                    <span>Vinod Patidar</span>
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
                                <span className={styles.resourceName}>JavaScript - Closure</span>
                            </div>
                            <div className={styles.viewsContainer}>
                                <span className={styles.views}>344 views</span>
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
                </Row>
            </div>
        )
    }
}

export default PublicResources;
