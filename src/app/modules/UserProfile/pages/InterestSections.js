import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Modal, Row,Tag,Typography } from 'antd'
import React, { useState } from 'react'

const { Title } = Typography;

export default function InterestSection() {

    const [form] = Form.useForm();
    const [visible,setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };
    
    const handleCancel = e => {
        form.resetFields();
        setVisible(false);
    };

    const onFinish = values =>{
        form.validateFields()
          .then(values => {
            form.resetFields();
            setVisible(false);
            console.log(values.interest);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
        });
    }

    return (
        <div className="box-shadow" style={{borderRadius:".3rem",padding:"1rem",margin:"1rem"}}>
        <Row justify="space-between" align="middle">
            <Col>
                <Title level={4}>Interest</Title>
            </Col>
            <Col>
                <PlusOutlined onClick={showModal} style={{fontSize:"1.4rem"}} />
            </Col>
        </Row>
        <Row style={{flexDirection:"row",marginTop:".5rem"}}>
            <Tag color="blue">Nodejs</Tag>
            <Tag color="magenta">React</Tag>
            <Tag color="red">Learning</Tag>
        </Row>
        <Modal
          title="Add Interest"
          visible={visible}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Reset
            </Button>,
            <Button key="submit" type="primary" htmlType="submit" onClick={onFinish}>
              Add
            </Button>,
          ]}
        >
           <Form
            form={form}
            name="basic"
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            >
            <Form.Item
                label="Interest"
                name="interest"
                rules={[{ required: true, message: 'Please input your interest!' }]}
            >
                <Input />
            </Form.Item>
            </Form>
        </Modal>
    </div>
    )
}
