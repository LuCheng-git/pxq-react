import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PublicHeader from '../../components/PublicHeader/Index.jsx'
import Alert from '../../components/Alert/Index'
import './Index.less'

import { Form, Input, Button,Upload} from 'antd';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {
        return (
            <main className="homeContainer">
                <PublicHeader title="首页" record></PublicHeader>
                <p className="common-title firstTitle" >请输入您的信息</p>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                >
                    <Form.Item className="formItem"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input className="formInput" prefix="销售金额 :" />
                    </Form.Item>

                    <Form.Item className="formItem"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input className="formInput" prefix="客户姓名 :" />
                    </Form.Item>

                    <Form.Item className="formItem"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input className="formInput" prefix="客户电话 :" />
                    </Form.Item>

                    <p className="common-title">请选择销售产品</p>

                    <Link className="selectBtn">
                        选择产品
                    </Link>

                    <p className="common-title">请上传发票凭证</p>
                    
                    <Form.Item className="formItem"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Upload className="upload"></Upload>
                    </Form.Item>


                    
                        <Button className="subButton" type="primary" htmlType="submit" onClick={this.props.showModal}>
                            提交
                        </Button>
                   
                </Form>
                <Alert></Alert>
            </main>
        );
    }
}

export default Home;