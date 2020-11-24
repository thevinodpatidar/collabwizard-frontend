import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Modal, Row,Select,Typography } from 'antd'
import React ,{ useState } from 'react'
import ExperienceCard from '../components/ExperienceCard';
import {START_YEAR} from "../pages/YearHelper";

const { Title } = Typography;
const { TextArea } = Input;
const { Option } = Select;

export default function EducationSection() {

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
            console.log(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
        });
    }

    return (
        <div className="box-shadow" style={{borderRadius:".3rem",padding:"1rem",margin:"1rem"}}>
            <Row justify="space-between" align="middle">
                <Col>
                    <Title level={4}>Education</Title>
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
                title="Add Education"
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
                <label htmlFor="school" >School *</label>
                <Form.Item
                    name="school"
                    rules={[{ required: true, message: 'Please input your school!' }]}
                >
                    <Input />
                </Form.Item>
                <label htmlFor="degree" >Degree *</label>
                <Form.Item
                    name="degree"
                    rules={[{ required: true, message: 'Please input your degree!' }]}
                >
                    <Input />
                </Form.Item>
                <label htmlFor="fieldOfStudy" >Field of study *</label>
                <Form.Item
                    name="fieldOfStudy"
                    rules={[{ required: true, message: 'Please input your field of study!' }]}
                >
                    <Input />
                </Form.Item>
                <Row gutter={[24,0]}>
                <Col>
                <label htmlFor="startYear" >Start Year *</label>
                <Form.Item 
                    name="startYear"
                    hasFeedback
                    rules={[{ required: true, message: 'Please choose start date!' }]}
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
                <Col>
                <label htmlFor="endYear" >End Year *</label>
                <Form.Item 
                    name="endYear"
                    hasFeedback
                    rules={[{ required: true, message: 'Please choose end date!' }]}
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
