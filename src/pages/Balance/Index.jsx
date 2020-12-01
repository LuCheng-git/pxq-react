import React, { Component } from 'react'
import PublicHeader from '../../components/PublicHeader/Index.jsx'
import './Index.less'
import {Button} from 'antd';

class Balance extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <main className="balanceContainer" >
                <PublicHeader title="提现" record></PublicHeader>
                <section className="cashOutContent">
                    <p className="cashOutHeader">您的可提现金额为：¥60</p>
                    <form className="cashOutForm">
                        <p>请输入提现金额（元）</p>
                        <p>¥ <input type="text" placeholder="0.00" maxLength="5"/></p>
                    </form>
                    <Button className="subButton" type="primary" htmlType="submit">
                        申请提现
                    </Button>
                </section>
            </main>
        );
    }
}
 
export default Balance;