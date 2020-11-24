import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Modal, Row,Select,Typography,Checkbox } from 'antd'
import React, { useState } from 'react'
import ExperienceCard from '../components/ExperienceCard';
import { EMPLOYMENT_TYPE, START_YEAR, MONTHS } from "../pages/YearHelper";

const { Title } = Typography;
const { TextArea } = Input;
const { Option } = Select;

export default function ExperienceSection() {

    const [form] = Form.useForm();
    const [visible,setVisible] = useState(false);
    const [checked,setChecked] = useState(false);
    const [disabled,setDisabled] = useState(false);

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
            console.log(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
        });
    }

    const toggleChecked = () => {
        setChecked(!checked);
    };

    const toggleDisable = () => {
        setDisabled(!disabled);
    };

    const onChange = e => {
        console.log('checked = ', e.target.checked);
        setChecked(e.target.checked);
    };

    return (
        <div className="box-shadow" style={{borderRadius:".3rem",padding:"1rem",margin:"1rem"}}>
            <Row justify="space-between" align="middle">
                <Col>
                    <Title level={4}>Experience</Title>
                </Col>
                <Col>
                    <PlusOutlined onClick={showModal} style={{fontSize:"1.4rem"}} />
                </Col>
            </Row>
            <Row style={{flexDirection:"column"}}>
                <ExperienceCard />
                <ExperienceCard />
            </Row>
            <Modal
                title="Add Experience"
                visible={visible}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                    Reset
                    </Button>,
                    <Button key="submit" type="primary" htmlType="submit" onClick={onFinish}>
                    Submit
                    </Button>,
                ]}
            >
            <Form
                form={form}
                name="basic"
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                >
                <label htmlFor="title" >Title *</label>
                <Form.Item
                    name="title"
                    rules={[{ required: true, message: 'Please input your title!' }]}
                >
                    <Input />
                </Form.Item>
                <label htmlFor="employmentType" >Employment Type *</label>
                <Form.Item 
                    name="employmentType"
                    hasFeedback
                    rules={[{ required: true, message: 'Please choose employment type!' }]}
                    >
                    <Select>
                        {
                            EMPLOYMENT_TYPE.map((year,index) => (
                                <Option key={index} value={year}>{year}</Option>
                            ))
                        }
                    </Select>
                </Form.Item>
                <label htmlFor="company" >Company *</label>
                <Form.Item
                    name="company"
                    rules={[{ required: true, message: 'Please input your company!' }]}
                >
                    <Input />
                </Form.Item>
                <label htmlFor="location" >Location *</label>
                <Form.Item
                    name="location"
                    rules={[{ required: true, message: 'Please input your location!' }]}
                >
                    <Input />
                </Form.Item>
                {/* <Form.Item
                    name="present"
                    hasFeedback
                >
                    <Checkbox
                        checked={checked}
                        disabled={disabled}
                        onChange={onChange}
                    >
                        I am currently working in this role
                    </Checkbox>
                </Form.Item> */}
                <Row gutter={[24,0]}>
                <Col>
                <label htmlFor="startMonth" >Start Month *</label>
                <Form.Item 
                    name="startMonth"
                    hasFeedback
                    rules={[{ required: true, message: 'Please choose start month!' }]}
                    >
                    <Select style={{ width: 120 }}>
                        {
                            MONTHS.map((year,index) => (
                                <Option key={index} value={year}>{year}</Option>
                            ))
                        }
                    </Select>
                </Form.Item>
                </Col>
                <Col>
                <label htmlFor="startYear" >Start Year *</label>
                <Form.Item 
                    name="startYear"
                    hasFeedback
                    rules={[{ required: true, message: 'Please choose start year!' }]}
                >
                    <Select style={{ width: 120 }}>
                        {
                            START_YEAR.map((year,index) => (
                                <Option key={index} value={year}>{year}</Option>
                            ))
                        }
                    </Select>
                </Form.Item>
                </Col>
                </Row>
                <Row gutter={[24,0]}>
                    <Col>
                    <label htmlFor="endMonth" >End Month *</label>
                    <Form.Item 
                        name="endMonth"
                        hasFeedback
                        rules={[{ required: true, message: 'Please choose end month!' }]}
                        >
                        <Select style={{ width: 120 }}>
                            {
                                MONTHS.map((year,index) => (
                                    <Option key={index} value={year}>{year}</Option>
                                ))
                            }
                        </Select>
                    </Form.Item>
                    </Col>
                    <Col>
                    <label htmlFor="endYear" >End Year *</label>
                    <Form.Item 
                        name="endYear"
                        hasFeedback
                        rules={[{ required: true, message: 'Please choose end year!' }]}
                    >
                        <Select style={{ width: 120 }}>
                            {
                                START_YEAR.map((year,index) => (
                                    <Option key={index} value={year}>{year}</Option>
                                ))
                            }
                        </Select>
                    </Form.Item>
                    </Col>
                </Row> 
                </Form>
            </Modal>
        </div>
    )
}
