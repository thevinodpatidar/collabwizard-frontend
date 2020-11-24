import { Avatar, Col, Row,Typography } from 'antd'
import React from 'react'

const { Text } = Typography;

export default function FeedsCardTopHeader() {
    return (
        <div>
            <Row style={{display:"flex",alignItems:"center"}}>
                <Col>
                    <Avatar shape="square" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </Col>
                <Col>
                <Row >
                    <Col style={{display:"flex",flexDirection:"column",marginLeft:".3rem"}}>
                        <span style={{fontSize:"1rem",fontWeight:"bold"}}>Vinod Patidar</span>
                        <span style={{fontSize:".8rem"}}>Full Stack Developer</span>
                        <span style={{fontSize:".8rem"}}>1d ago</span>
                    </Col>
                </Row>
                </Col>
            </Row>
        </div>
    )
}
