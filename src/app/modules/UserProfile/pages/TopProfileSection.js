import { Avatar, Col, Row } from 'antd'
import React from 'react'

export default function TopProfileSection() {
    return (
        <div className="box-shadow" style={{borderRadius:".3rem",padding:"1rem",margin:"1rem"}}>
            <Row>
                <Col xs={{ span: 5 }}>
                    <Avatar shape="square" size={80}/>
                </Col>
            </Row>
            <Row style={{justifyContent:"space-between",marginTop:"1rem"}}>
                <Col>
                    <Row style={{flexDirection:"column"}}>
                        <Col xs={24} sm={24}>
                            <span style={{fontSize:"1.2rem",fontWeight:"bold"}} >Vinod Patidar</span>
                        </Col>
                        <Col>
                            <span style={{fontSize:"1rem",fontWeight:"bold"}}>Full Stack Developer</span>
                        </Col>
                        <Col>
                            <span style={{fontSize:"1rem",fontWeight:"bold"}}>Indore, Madhya Pradesh, India </span>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row style={{flexDirection:"column"}}>
                        <Col>
                            <Row>
                                <Col span={10}>
                                    <Avatar shape="square" size={36}/>
                                </Col>
                                <Col span={12} offset={1}>
                                    <h4>Company</h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col span={10}>
                                    <Avatar shape="square" size={36}/>
                                </Col>
                                <Col span={12} offset={1}>
                                    <h4>Shri Vaishanav Vidhyapeeth </h4>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
