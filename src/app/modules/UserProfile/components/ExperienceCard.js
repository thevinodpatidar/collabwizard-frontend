import { EditFilled } from '@ant-design/icons'
import { Avatar, Col, Divider, Row } from 'antd'
import React from 'react'

export default function ExperienceCard() {
    return (
        <div>
            <Row align="middle">
                <Col >
                    <Avatar size={50} />
                </Col>
                <Row style={{flexDirection:"column",marginLeft:"1rem"}}>
                    <Col>
                        <span style={{fontSize:"1.1rem",fontWeight:"bold"}}>Full Stack Developer</span>
                    </Col>
                    <Col>
                        <span>Digital Project - Full Time</span>
                    </Col>
                    <Col>
                        <span>May 2020 - Present</span>
                    </Col>
                    <Col>
                        <span>Indore, Madhya Pradesh, India</span>
                    </Col>
                </Row>
            </Row>
            <Divider />
        </div>
    )
}
