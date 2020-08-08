import React, { Component } from 'react'
import { Card,Avatar, Row, Col, Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
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
    }

    onCreate = () => {
        this.setState({
            visible : false        
        })
    };


    render() {
        console.log(this.props.data);
        return (
            <div className={styles.container}>
                <Row style={{display:"flex", justifyContent:"center",alignItems : "center", width:"100vw"}}>
                    <Col span={21}>
                        <h1 style={{fontSize:"2rem", paddingLeft:"1rem"}}>Videos</h1>
                    </Col>
                    <Col span={3}>
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
                <Row>
                    {
                        // this.props.data.map(resource => (
                        //     <Col style={{padding:".2rem"}}>
                        //     <Card
                        //         // style={{ width: 300 }}
                        //         cover={
                        //         <img
                        //             alt="example"
                        //             src={resource.url}
                        //         />
                        //         }
                        //     >
                        //     <Row gutter={12} justify-content="center" align="middle">
                        //         <Col span={24}>
                        //         <Meta 
                        //         style={{ display:"flex",justifyContent:"center", alignItems:"center"}}
                        //         avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        //         title={resource.resourceName}
                        //         description={resource.user.username}
                        //         />
                        //         </Col>
                        //     </Row>
                        //     </Card>
                        // </Col>
                        // ))
                    }
                    {/* <Col style={{padding:".2rem"}}>
                        <Card
                            // style={{ width: 300 }}
                            cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                            }
                        >
                        <Row gutter={12} justify-content="center" align="middle">
                            <Col span={24}>
                            <Meta 
                            style={{ display:"flex",justifyContent:"center", alignItems:"center"}}
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="Resource Name"
                            description="Vinod Patidar"
                            />
                            </Col>
                        </Row>
                        </Card>
                    </Col> */}
                    {/* <Col style={{padding:".2rem"}}>
                        <Card
                            // style={{ width: 300 }}
                            cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                            }
                        >
                        <Row gutter={12} justify-content="center" align="middle">
                            <Col span={24}>
                            <Meta 
                            style={{ display:"flex",justifyContent:"center", alignItems:"center"}}
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="Resource Name"
                            description="Vinod Patidar"
                            />
                            </Col>
                        </Row>
                        </Card>
                    </Col>
                    <Col style={{padding:".2rem"}}>
                        <Card
                            // style={{ width: 300 }}
                            cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                            }
                        >
                        <Row gutter={12} justify-content="center" align="middle">
                            <Col span={24}>
                            <Meta 
                            style={{ display:"flex",justifyContent:"center", alignItems:"center"}}
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="Resource Name"
                            description="Vinod Patidar"
                            />
                            </Col>
                        </Row>
                        </Card>
                    </Col>
                    <Col style={{padding:".2rem"}}>
                        <Card
                            // style={{ width: 300 }}
                            cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                            }
                        >
                        <Row gutter={12} justify-content="center" align="middle">
                            <Col span={24}>
                            <Meta 
                            style={{ display:"flex",justifyContent:"center", alignItems:"center"}}
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="Resource Name"
                            description="Vinod Patidar"
                            />
                            </Col>
                        </Row>
                        </Card>
                    </Col>
                    <Col style={{padding:".2rem"}}>
                        <Card
                            // style={{ width: 300 }}
                            cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                            }
                        >
                        <Row gutter={12} justify-content="center" align="middle">
                            <Col span={24}>
                            <Meta 
                            style={{ display:"flex",justifyContent:"center", alignItems:"center"}}
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="Resource Name"
                            description="Vinod Patidar"
                            />
                            </Col>
                        </Row>
                        </Card>
                    </Col>
                    <Col style={{padding:".2rem"}}>
                        <Card
                            // style={{ width: 300 }}
                            cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                            }
                        >
                        <Row gutter={12} justify-content="center" align="middle">
                            <Col span={24}>
                            <Meta 
                            style={{ display:"flex",justifyContent:"center", alignItems:"center"}}
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="Resource Name"
                            description="Vinod Patidar"
                            />
                            </Col>
                        </Row>
                        </Card>
                    </Col> */}
                </Row>
            </div>
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
