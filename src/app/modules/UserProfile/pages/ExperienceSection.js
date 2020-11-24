import { PlusOutlined } from '@ant-design/icons';
import { Col, Row,Typography } from 'antd'
import React from 'react'
import ExperienceCard from '../components/ExperienceCard';

const { Title } = Typography;
export default function ExperienceSection() {
    return (
        <div className="box-shadow" style={{borderRadius:".3rem",padding:"1rem",margin:"1rem"}}>
            <Row justify="space-between" align="middle">
                <Col>
                    <Title level={4}>Experience</Title>
                </Col>
                <Col>
                    <PlusOutlined style={{fontSize:"1.4rem"}} />
                </Col>
            </Row>
            <Row style={{flexDirection:"column"}}>
                <ExperienceCard />
                <ExperienceCard />
            </Row>
        </div>
    )
}
