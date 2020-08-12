import React, { Component } from 'react'
import { Card,Avatar, Row, Col, Button,Spin, Popconfirm } from 'antd';
import { PlusSquareOutlined,EditOutlined, QuestionCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import ReactPlayer from 'react-player'
// import PropTypes from 'prop-types'

// imports 
import UploadForm from './VideoUploadForm';

// styles
import styles from  "./Videos.module.scss";
import { addResourceAction, getResourceAction, deleteResourceAction } from '../actions';
import { getToken } from '../../../../../utils/localStorage';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
        // this.getUploadedDays();
    }

    getUploadedDays =(postedAt) =>{
        // var date = new Date()   ;
        // console.log(postedAt)
        // console.log(date.toDateString());
        return postedAt;
    }

    // deleteResources = e =>{
    //     console.log(e);
    //     const token = getToken("token");
    //     this.props.deleteResource(id,token);
    // }
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
                    <Col xs={24} sm={24} md={16} lg={18} xl={20}>
                        <h1 style={{fontSize:"2rem", paddingLeft:"1rem"}}>Videos</h1>
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
                        this.props.data.map(resource => (
                        // <Link to="" >
                        <Col xs={24} sm={24} md={12} lg={8} xl={6} key={resource.id}>
                        <div className={styles.playerWrapper}>
                            <ReactPlayer
                            className={styles.reactPlayer}
                            url={resource.resourceLink}
                            controls
                            width='100%'
                            height='100%'
                            />
                        </div>
                        <div className={styles.playerBodyWrapper}>
                        <div className={styles.textWrapper}>
                            <div className={styles.resourceHeading}>{resource.resourceName}</div>
                            <div className={styles.resourceby}>{resource.User.username}</div>
                            <div className={styles.resourceDate} >{this.getUploadedDays(resource.postedAt)}</div>
                        </div>
                        <div className={styles.actions}>
                        <Popconfirm
                        onConfirm={()=>{this.props.deleteResource(resource.id,getToken("token"))}}
                         title="Are you sure delete this video?" icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
                           <DeleteOutlined style={{ color: 'red' }} />
                        </Popconfirm>
                            {/* <EditOutlined /> */}
                        </div>
                        </div>
                        </Col>
                        // </Link>
                        )) 
                        : <Col style={{margin : "auto 0"}}> 
                            <Spin />
                          </Col>
                    }
                </Row>
            </>
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
    deleteResource : (id,token) =>{
        dispatch(deleteResourceAction(id,token));
    }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Videos);
