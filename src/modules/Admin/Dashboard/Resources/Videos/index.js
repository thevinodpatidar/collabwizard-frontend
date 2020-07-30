import React, { Component } from 'react'
import { Card,Avatar, Row, Col, Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
// import PropTypes from 'prop-types'

import styles from  "./index.scss";
import UploadForm from '../UploadForm';


const { Meta } = Card;

class Videos extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    constructor(props) {
        super(props);
        this.state = {
            visible : false
        };
      }

    onCreate = values => {
        console.log('Received values of form: ', values);
        this.setState({
            visible : false        
        })
    };

    render() {
        return (
            <div className={styles.container}>
                <Row gutter={2} style={{display:"flex", justifyContent:"center",alignItems : "center", paddingBottom:"2rem"}}>
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
                        />
                    </Col>
                </Row>
                <Row  >
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
                </Row>
            </div>
        )
    }
}


export default Videos
