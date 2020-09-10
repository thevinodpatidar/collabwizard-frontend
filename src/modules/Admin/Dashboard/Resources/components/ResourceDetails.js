import React, { useEffect, useState } from 'react'
import { Modal, Badge, Switch, Checkbox } from 'antd'
import styles from "./ResourceDetails.module.scss";
import ReactPlayer from 'react-player';
import { getToken } from '../../../../../utils/localStorage';


function ResourceDetails(props) {
    const token = getToken("token");
    const [isPublic,setIsPublic] = useState(props.resource.isPublic);
    const makeResourcePublicOrPrivate=(e,id)=>{
        console.log(e.target.checked);
        props.makePublicOrPrivate({id: id, check: e.target.checked},token);
        setIsPublic(e.target.checked)
    }

    return (
        <div>
            <Modal
                visible={props.toggleResourceDetailModal}
                title="Resource Details"
                onCancel={props.onCancel}
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
                                <img src="https://img.icons8.com/ios/50/000000/open-document.png" alt="" />
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
                                    {/* <Switch
                                    size="small"
                                    checked={props.resource.isPublic} onClick={makeResourcePublicOrPrivate} /> */}
                                    <Checkbox
                                        checked={props.resource.isPublic}
                                        // disabled={this.state.disabled}
                                        onChange={(e)=>makeResourcePublicOrPrivate(e,props.resource.id)}
                                    ></Checkbox>
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
