import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PublicHeader from '../../components/PublicHeader/Index.jsx'
import './Index.less'

import { Form, Input, Button,Upload,Modal} from 'antd';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible:false
        }
    }

    showModal () {
        this.setIsModalVisible(true);
      };
    
    handleOk (){
        this.setIsModalVisible(false);
      };
    
    handleCancel (){
        this.setIsModalVisible(false);
      };

    setIsModalVisible (isModalVisible){
        this.setState({
            isModalVisible
        })
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


                    
                        <Button className="subButton" type="primary" htmlType="submit" onClick={this.showModal.bind(this)}>
                            提交
                        </Button>
                        <Modal
                            style={{width:'80px',height:'80px'}}
                            visible={this.state.isModalVisible}
                            onOk={this.handleOk.bind(this)}
                            cancelText='取消'
                            okText='确认'
                            onCancel={this.handleCancel.bind(this)}
                        >
                            <p>请输填写金额</p>
                        </Modal>
                </Form>
            </main>
        );
    }
}

export default Home;