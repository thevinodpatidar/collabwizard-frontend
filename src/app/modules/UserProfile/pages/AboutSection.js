import { EditOutlined } from '@ant-design/icons';
import { Col, Row,Typography } from 'antd'
import React from 'react'

const { Title,Paragraph } = Typography;
export default function AboutSection() {
    return (
        <div className="box-shadow" style={{borderRadius:".3rem",padding:"1rem",margin:"1rem"}}>
            <Row justify="space-between" align="middle">
                <Col>
                    <Title level={4}>About</Title>
                </Col>
                <Col>
                    <EditOutlined style={{fontSize:"1.4rem"}} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Paragraph style={{color:"#000"}}>
                    FREE WEBINAR: Join our panel of experts on 3rd December at 16:00 GMT / 17:00 CET / 11am EST for an exclusive online panel discussion on YouGov’s Best Global Brands of 2020.
                    </Paragraph>
                </Col>
            </Row>
        </div>
    )
}
