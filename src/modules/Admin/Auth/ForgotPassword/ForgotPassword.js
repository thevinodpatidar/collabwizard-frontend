import React, { Component } from 'react'
import styles from "./ForgotPassword.module.scss";
import { Form, Input, Button} from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


export class ForgotPassword extends Component {

  onFinish = values => {
    console.log('Received values of form: ', values);
  };

  render() {
    return (
      <div className={styles.forgotPasswordForm}>
      <div>
        <h1 className={styles.title}>School Tribe</h1>
        <p className={styles.center}><b>"Teach better, together"</b></p>
        <h2 className={styles.center}>ForgotPassword</h2>
      </div>
    <Form
      name="normal_forgotPassword"
      initialValues={{
        remember: true,
      }}
      onFinish={this.onFinish}
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
        <Button type="primary" htmlType="submit" className={styles.forgotPasswordFormButton}>
          Send me link
        </Button>
      </Form.Item>
        <div className={styles.center}>              
          <Link to="/login">Back to Login</Link>
        </div>
    </Form>
    </div>
    )
  }
}

export default ForgotPassword;