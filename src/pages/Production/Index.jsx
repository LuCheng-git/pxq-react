import React, { Component } from 'react';
import { is, fromJS } from 'immutable'
import PublicHeader from '../../components/PublicHeader/Index.jsx'
import { getProData } from '../../store/production/action'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Index.less'

class Production extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    static propTypes = {
        proData: PropTypes.object.isRequired,

    }

    componentDidMount() {

        this.props.getProData();

    }

    render() {
        return (
            <main className="productionContainer">
                <PublicHeader title="首页" confirm></PublicHeader>
                <section className="proListContainer">
                    <ul className="proListUl">
                        {
                            this.props.proData.dataList.map(item => (
                                <li className="proListItem" key={item.product_id}>
                                    <div className="proSelect">
                                        <span className="iconfont icon-success_fill"></span>
                                        <span>{item.product_name}</span>
                                    </div>

                                    <div className="proItemEdit">
                                        <span className="iconfont icon-offline_fill"></span>
                                        <span className="proNum">0</span>
                                        <span className="iconfont icon-addition_fill"></span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </section>
            </main>
        );
    }
}

export default connect(state => ({ proData: state.proData }), { getProData })(Production);