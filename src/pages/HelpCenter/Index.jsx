import React, { Component } from 'react'
import PublicHeader from '../../components/PublicHeader/Index.jsx'
import './Index.less'
class HelpCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <main className="HelpCenterContainer">
                <PublicHeader title="帮助中心"></PublicHeader>
                <article className="contextContainer">
                    <h2>介绍</h2>
                    <p>本项目主要用于理解 react 和 redux 的编译方式，以及 react + redux 之间的配合方式</p>
                    <h2>技术要点</h2>
                    <p>react</p>
                    <p>redux</p>
                    <p>webpack</p>
                    <p>react-router</p>
                    <p>ES 6/7/8</p>
                    <p>axios</p>
                    <p>less</p>
                    <p>immutable</p>
                </article>
            </main>
        );
    }
}

export default HelpCenter;