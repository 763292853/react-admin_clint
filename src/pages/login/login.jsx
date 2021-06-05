import React, { Component } from "react";
import { Form, Input, Button } from "antd";

import "./login.scss";
import logo from "./images/logo.png";
//登陆的路由组件

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 25,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 12,
    span: 20,
  },
};

//配置对象   属性名是特定的一些名称

class Login extends Component {
  onFinish = (values) => {
    //values  用户输入的账号密码
    if(values){
        console.log('发送ajax请求');
    }else{
        
    }

  };

  onFinishFailed = (errorInfo) => {
    //登录失败回调
    console.log('校验失败');
    
  };

//   validatorPwd = (rule, value, callback) => {

//     if(!value){
//         callback('密码必须输入')
//     }else if(value.length<4){
//         callback('密码长度不能小于4')
//     }else if(value.length>12){
//         callback('密码长度不能大于12')
//     }else if(!/^[a-zA-Z0-9]+$/.test(value)){
//         callback('用户名必须是英文、数字或者下划线')
//     }else{
//         callback()
//     }

//   };
  render() {
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt={logo} />
          <h1>React项目：后台管理系统</h1>
        </header>
        <section className="login-content">
          <h2>用户登陆</h2>
          <Form
            {...layout}
            className="login-form"
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[
                //声明式验证
                {
                  required: true,
                  whitespace: true,
                  message: "请输入用户名",
                },
                {
                  min: 4,
                  message: "用户名最少4位",
                },
                {
                  max: 12,
                  message: "用户名最多12位",
                },
                {
                  pattern: /^[a-zA-Z0-9]+$/,
                  message: "用户名必须是英文、数字或者下划线",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[
                {
                  required: true,
                  message: "请输入密码",
                },
                
                // {
                //   validator: this.validatorPwd,
                // },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}

//高阶函数

//高阶组件

// const WrapLogin =Form.create()(Login)

export default Login;

// 前台表单验证
//收集数据
