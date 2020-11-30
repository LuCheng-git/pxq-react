import React, { Component } from 'react';
import PublicHeader from '../../components/PublicHeader/Index.jsx'
import './Index.less'

class Production extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <main className="productionContainer">
                <PublicHeader title="首页"></PublicHeader>
                <section className="proListContainer">
                    <ul className="proListUl">
                        <li className="proListItem">
                            <div className="proSelect">
                                <span className="iconfont icon-success_fill"></span>
                                <span> Pdfssdfsdfsf</span>
                            </div>

                            <div className="proItemEdit">
                                <span  className="iconfont icon-offline_fill"></span>
                                <span  className="proNum">0</span>
                                <span  className="iconfont icon-addition_fill"></span>
                            </div>
                        </li>
                    </ul>
                </section>
            </main>
        );
    }
}

export default Production;