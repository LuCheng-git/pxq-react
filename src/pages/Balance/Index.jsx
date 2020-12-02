import React, { Component } from 'react'
import PublicHeader from '../../components/PublicHeader/Index.jsx'
import API from '../../api/api'
import './Index.less'
import {Button,Modal} from 'antd';

class Balance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible:false,
            balance:0
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
    // 初始化数据
    initData = async () => {
        try {
            let result = await API.getBalance();
            this.setState({
                balance:result.data.balance
            });
            console.log(this.state.balance)
        } catch (error) {
            throw error
        }
    
    }

    componentDidMount(){
        this.initData()
    }

    render() { 
        return (
            <main className="balanceContainer" >
                <PublicHeader title="提现" record></PublicHeader>
                <section className="cashOutContent">
                <p className="cashOutHeader">您的可提现金额为：¥{this.state.balance}</p>
                    <form className="cashOutForm">
                        <p>请输入提现金额（元）</p>
                        <p>¥ <input type="text" placeholder="0.00" maxLength="5"/></p>
                    </form>
                    <Button className="subButton" type="primary" htmlType="submit" onClick={this.showModal.bind(this)}>
                        申请提现
                    </Button>
                    <Modal
                        style={{width:'80px',height:'80px'}}
                        visible={this.state.isModalVisible}
                        onOk={this.handleOk.bind(this)}
                        cancelText='取消'
                        okText='确认'
                        onCancel={this.handleCancel.bind(this)}
                    >
                        <p>请输提现金额</p>
                        </Modal>
                </section>
            </main>
        );
    }
}
 
export default Balance;