import { Col, Row } from 'antd'
import React from 'react'
import Feeds from './pages/Feeds'
import Post from './pages/Post'
import Profile from './pages/Profile'

export default function FeedPage() {
    return (
        <>
            <Row>
                <Col xs={{ span: 5, offset: 1 }} >
                    <Post />
                </Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 1 }}>
                    <Feeds />
                </Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Profile />
                </Col>
            </Row>
        </>
    )
}
