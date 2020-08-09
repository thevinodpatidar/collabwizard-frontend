import React, { Component } from 'react'
import { Card,Avatar, Row, Col, Button,Spin } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import ReactPlayer from 'react-player'
// import PropTypes from 'prop-types'

// imports 
import UploadForm from './VideoUploadForm';

// styles
import styles from  "./Videos.module.scss";
import { addResourceAction, getResourceAction } from '../actions';
import { getToken } from '../../../../../utils/localStorage';
import { connect } from 'react-redux';

const { Meta } = Card;

class Videos extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    constructor(props) {
        super(props)
        this.state = {
            visible : false
        };
      }

    componentDidMount(){
        const token = getToken("token");
        this.props.getResources(token);
        this.getUploadedDays();
    }

    getUploadedDays =(postedAt) =>{
        var date = Date.now();
        console.log(postedAt)
        console.log(date.toString());
        return date;
    }
    onCreate = () => {
        this.setState({
            visible : false        
        })
    };


    render() {
        return (
            // <div className={styles.container}>
            <>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col span={14}>
                        <h1 style={{fontSize:"2rem", paddingLeft:"1rem"}}>Videos</h1>
                    </Col>
                    <Col span={6} offset={4}>
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
                        this.props.data.data.map(resource => (
                        <Col span={6} key={resource.id}>
                           <div className={styles.playerWrapper}>
                            <ReactPlayer
                            className={styles.reactPlayer}
                            url={resource.resourceLink}
                            controls
                            width='100%'
                            height='100%'
                            />
                        </div>
                        <div className={styles.textWrapper}>
                            <div className={styles.resourceHeading}>{resource.resourceName}</div>
                            <div className={styles.resourceby}>{resource.User.username}</div>
                        <div className={styles.resourceDate} >{this.getUploadedDays(resource.postedAt)}</div>
                        </div>
                        </Col>
                        )) 
                        : <Spin />
                    }
                </Row>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data : state.resources.response
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    onUpload: (resource,token) => {
        dispatch(addResourceAction(resource,token));
    },
    getResources : (token) => {
        dispatch(getResourceAction(token));
    }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Videos);
