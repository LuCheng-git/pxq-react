import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import API from '../../api/api';
import { clearProduction } from '../../store/production/action'
import {saveFormData,saveImg,clearData} from '../../store/home/action'
import PropTypes from 'prop-types'
import PublicHeader from '../../components/PublicHeader/Index.jsx'
import './Index.less'

import { Form, Input, Button, Upload, Modal ,message} from 'antd';

import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            alertTip:'',//弹框提示文字
            loading: false,
        }
    }

    static propTypes = {
        formData: PropTypes.object.isRequired,
        saveFormData: PropTypes.func.isRequired,
        saveImg: PropTypes.func.isRequired,
        clearData: PropTypes.func.isRequired,
        clearProduction: PropTypes.func.isRequired
    }


    componentDidMount(){
        console.log(this.props.formData)
    }



    
    showModal() {
        this.setIsModalVisible(true);
    };

    handleOk() {
        this.setIsModalVisible(false);
    };

    handleCancel() {
        this.setIsModalVisible(false);
    };

    setIsModalVisible(isModalVisible) {
        this.setState({
            isModalVisible
        })
    }

    selectedProList = []

    //初始化选择数据
    initData = props => {
        this.selectedProList = []
        console.log(props.proData.dataList)
        props.proData.dataList.forEach(item => {
            if (item.selectStatus && item.selectNum) {
                this.selectedProList.push(item)
            }

        })
        console.log(this.selectedProList)
        this.setState({ props })
    }

    componentDidMount() {
        this.initData(this.props)
    }
    //处理Input
    handleInput = (type,e) => {
        let value = e.target.value
        this.props.saveFormData(value,type)
        
    }

    //提交表单
    subForm = () => {
        
        const {orderSum,name,phoneNum} = this.props.formData
        let alertTip = ''
        console.log(orderSum.toString().length)
        if(!orderSum.toString().length){
            alertTip = '请填写金额';
            
          }else if(!name.toString().length){
            alertTip = '请填写姓名';
          }else if(!phoneNum.toString().length){
            alertTip = '请填写正确的手机号';
          }else{
            alertTip = '添加数据成功';
            this.props.clearProduction();
            this.props.clearData();
          }
          this.showModal()
          this.setState({
            alertTip,
          })
          console.log('ddsadas')
    }
    //上传图片

    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }

    beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
      }

      handleChange = info => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
           this.getBase64(info.file.originFileObj, imageUrl =>
            this.setState({
              imageUrl,
              loading: false,
            }),
          );
        }
      };

    render() {

        const { loading, imageUrl } = this.state;
        console.log(this.state.imageUrl)
        // this.props.saveImg(this.state.imageUrl)
        const uploadButton = (
            <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 8 }}>Upload</div>
            </div>
            
        );
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
                        <Input className="formInput" prefix="销售金额 :"  onChange={this.handleInput.bind(this,'orderSum')}/>
                    </Form.Item>

                    <Form.Item className="formItem"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input className="formInput" prefix="客户姓名 :" onChange={this.handleInput.bind(this,'name')}/>
                    </Form.Item>

                    <Form.Item className="formItem"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input className="formInput" prefix="客户电话 :" onChange={this.handleInput.bind(this,'phoneNum')}/>
                    </Form.Item>

                    <p className="common-title">请选择销售产品</p>

                    <Link className="selectBtn" to='/production'>
                        {
                            this.selectedProList.length ? <ul className="selectUl">
                                {
                                    this.selectedProList.map(item => <li key={item.product_id} className="selectLi">
                                        {item.product_name}X{item.selectNum}
                                    </li>)
                                }
                            </ul> : '选择产品'
                        }

                    </Link>

                    <p className="common-title">请上传发票凭证</p>

                    <Form.Item className="formItem"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Upload
                    
                            listType="picture-card"
                            className="upload"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={this.beforeUpload}
                            onChange={this.handleChange}
                        >
                            {imageUrl ? <img className="uploadImg" src={imageUrl} alt="invoice" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                    </Form.Item>



                    <Button className="subButton" type="primary" htmlType="submit" onClick={this.subForm.bind(this)}>
                        提交
                        </Button>
                    <Modal
                        style={{ width: '80px', height: '80px' }}
                        visible={this.state.isModalVisible}
                        onOk={this.handleOk.bind(this)}
                        cancelText='取消'
                        okText='确认'
                        onCancel={this.handleCancel.bind(this)}
                    >
                        <p>{this.state.alertTip}</p>
                    </Modal>
                </Form>
            </main>
        );
    }
}

export default connect(state => ({ proData: state.proData ,formData: state.formData}), { clearProduction, saveFormData,saveImg,clearData})(Home);