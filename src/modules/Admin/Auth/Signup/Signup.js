import React from 'react';
import styles from "./Signup.module.scss";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUserAction } from '../actions';
import notificationWithIcon from '../../../../utils/notify';


const Signup = props => {
    const onFinish = values => {
      delete values.termsandcondition;

      props.dispatch(registerUserAction(values));
      };
      
      // if(props.data){
      //   let success = props.data.response.success;
      //   let message = props.data.error.message;

      // }
      // console.log("succes:",success);
      return (
        <div className={styles.signupForm}>
        <div>
          <h1 className={styles.title}>School Tribe</h1>
          <p className={styles.center}><b>"Teach better, together"</b></p>
          <h2 className={styles.center}>Register</h2>
        </div>
        { !props.data.status ? 
          props.data.error.message ? notificationWithIcon('error',props.data.error.message) : null : <Redirect to='/login' /> }
        <Form  
          layout="vertical"
          name="normal_login"
          initialValues={{
            termsandcondition: true,
          }}
          onFinish={onFinish}
        >
            <Form.Item
            name="username"
            // label="Username :"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
            >
            {/* <label htmlFor="username">Username :</label> */}
            <Input type="text" prefix={<UserOutlined className="site-form-item-icon" />}  placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="email"
            // label="Email :"
            rules={[
              {
                type : 'email',
                message : "Enter valid email!"
              },
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            {/* <label htmlFor="email">Email :</label> */}
            <Input type="email"  prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            // label="Password :"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            {/* <label htmlFor="password">Password :</label> */}
            <Input type="password" prefix={<LockOutlined className="site-form-item-icon" />}  placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="termsandcondition" 
            rules={[
              {
                required: true,
                message: 'Please accept term and conditions',
              },
            ]} valuePropName="checked" noStyle>
              <Checkbox>I accept Terms and Conditions</Checkbox>
            </Form.Item>
          </Form.Item>
    
          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles.signupFormButton}>
              Register
            </Button>
          </Form.Item>
          <div className={styles.center}>              
            <Link to="/login">Login now!</Link>
          </div>
        </Form>
        </div>
      );
};

const mapStateToProps = (state) => {
  return {
      data : state.auth.signup
  }
}
export default connect(mapStateToProps,null)(Signup);
