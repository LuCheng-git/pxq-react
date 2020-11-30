import React, { Component } from 'react'
import './RecordList.less'
class RecordList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <ul>
                    <li className="recordItem">
                        <section className="recordItemHeader">
                            <span>创建时间：1995-12.12</span>
                            <span>已通过</span>
                        </section>
                        <section className="recordItemContant">
                            <p><span>用户名：</span>测试&emsp;11111</p>
                            <p><span>商&emsp;品：</span>pDAdOJtqQ</p>
                            <p><span>金&emsp;额：</span>120&emsp;佣金：130</p>
                        </section>
                        <p className="recordItemFooter">等待管理员审核，审核通过后，佣金将结算至账户</p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default RecordList;