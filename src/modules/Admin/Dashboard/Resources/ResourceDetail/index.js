import React from 'react'
import { Modal, Row, Col } from 'antd';

export default function ResourceDetails() {
    return (
        // <div>
         Modal.info({
            title: 'Resource Details',
            content: (
                <div>
                    <Row >
                        <Col span={12} >
                            <h4>Resource Name : </h4>
                        </Col>
                        <Col>
                            <h4>Video1</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} >
                            <h4>Resource Type : </h4>
                        </Col>
                        <Col>
                            <h4>Videos</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} >
                            <h4>Resource Subtype : </h4>
                        </Col>
                        <Col>
                            <h4>Link</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} >
                            <h4>Posted By : </h4>
                        </Col>
                        <Col>
                            <h4>Vinod Patidar</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <h4>Posted At : </h4>
                        </Col>
                        <Col>
                            <h4>12/3/2020</h4>
                        </Col>
                    </Row>
                </div>
            ),
            onOk() {},
            })
        // </div>
    )
}
