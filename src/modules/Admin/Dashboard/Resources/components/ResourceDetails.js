import React, { useState } from 'react'
import { Modal, Badge, Switch } from 'antd'
import styles from "./ResourceDetails.module.scss";
import ReactPlayer from 'react-player';

function ResourceDetails(props) {
    // console.log(props)
    // const [isPublic, setisPublic] = useState(props.resource.isPublic)
    
    return (
        <div>
            <Modal
                visible={props.toggleResourceDetailModal}
                title="Resource Details"
                // okText="Upload"
                // cancelText="Cancel"
                onCancel={props.onCancel}
                // onOk={handleSubmit}
                footer={null}
                width="800px"
                >
                <div className={styles.resourceDetailsContainer}>
                    {   
                        props.isVideo ?
                        <div className={styles.playerModalWrapper}>
                            <ReactPlayer
                            className={styles.reactPlayer}
                            controls
                            playing={props.playing}
                            url={props.resource.resourceLink}
                            width='100%'
                            height='100%'
                        />
                        </div>
                        :
                        <div className={styles.articleWrapper}>
                            <div className={styles.imgContainer}>
                                <img src="https://img.icons8.com/ios/50/000000/open-document.png" />
                            </div>
                        </div>
                    }

                    <div className={styles.detailsContainer}>
                        <h1>{props.resource.resourceName}</h1>
                        <div className={styles.badges}>
                            <Badge count={props.resource.category} style={{backgroundColor:"#f48c06"}} className={styles.tag} />
                            {
                                props.resource.isPublic ?
                                <Badge count="Public" style={{backgroundColor:"#f48c06"}} className={styles.tag} />
                                :
                                <Badge count="Private" style={{backgroundColor:"#f48c06"}} className={styles.tag} />
                            }
                            <Badge count={props.resource.resourceType} style={{backgroundColor:"#f48c06"}} className={styles.tag} />
                        </div>
                        {
                            props.privateSection &&
                            <div className={styles.resourceVisibility}>
                                <h3>Resource Visibility</h3>
                                <div className={styles.switch}>
                                    <span className={styles.public}>Public</span>
                                    <Switch
                                    size="small"
                                    checked={props.resource.isPublic}  />
                                </div>
                            </div>
                        }
                        {
                            !props.isVideo ?
                            <a href={props.resource.resourceLink} target="blank" download>
                                <div className={styles.downloadContainer}>
                                    <span>Download</span>
                                </div>
                            </a>
                            : null
                        }
                    </div>
                </div> 
                </Modal>
        </div>
    )
}


export default ResourceDetails
