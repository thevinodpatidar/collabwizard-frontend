import React from 'react';
import "./index.scss";
import { Form, Input, Button} from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="forgotPassword-form">
         <div>
          <h1 className="title">School Tribe</h1>
          <p className="center">A community for growth</p>
          <h2 className="center">ForgotPassword</h2>
        </div>
    <Form
      name="normal_forgotPassword"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
            {
                type: "email",
                message : "Enter valid email!"
            },
            {
            required: true,
            message: 'Please input your email!',
            },
        ]}
      >
        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="forgotPassword-form-button">
          Send me link
        </Button>
      </Form.Item>
        <div className="center">              
          <Link to="/login">Back to Login</Link>
        </div>
    </Form>
    </div>
  );
};

// const mapPropsTo
export default ForgotPassword;
