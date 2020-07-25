import React from 'react';
import "./index.scss";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUserAction } from '../actions';


const Signup = props => {
    const onFinish = values => {
      console.log(values);
      delete values.termsandcondition;

      props.dispatch(registerUserAction(values));
      };
    
      let success, message;
      success = props.state.auth.signup.response.success;
      message = props.state.auth.signup.response.message;
    
      return (
        <div className="signup-form">
        <div>
          <h1 className="title">School Tribe</h1>
          <p className="center"><b>"Teach better, together"</b></p>
          <h2 className="center">Register</h2>
        </div>
        {!success ? <div style={{color:"red",textAlign:"center",padding:"10px"}}>{message}</div> : <Redirect to='/login' />}
        <Form 
          layout="vertical"
          name="normal_login"
          initialValues={{
            remember: true,
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
            <Button type="primary" htmlType="submit" className="signup-form-button">
              Register
            </Button>
          </Form.Item>
          <div className="center">              
            <Link to="/login">Login now!</Link>
          </div>
        </Form>
        </div>
      );
};

const mapStateToProps = (state) => ({state});

export default connect(mapStateToProps,null)(Signup);
