import React, { Component } from 'react';
import { is, fromJS } from 'immutable'
import PublicHeader from '../../components/PublicHeader/Index.jsx'
import { getProData,togleProduction,editProduction} from '../../store/production/action'
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
        getProData: PropTypes.func.isRequired,
        togleProduction: PropTypes.func.isRequired,
        editProduction: PropTypes.func.isRequired,
    }

    toSelect = index => {
        this.props.togleProduction(index)
    }

    handleEdit = (index,selectNum) => {
        let currentNum = this.props.proData.dataList[index].selectNum + selectNum
        if(currentNum < 0){
            return
        }
        this.props.editProduction(index,currentNum)
    }

    componentDidMount() {
        if(!this.props.proData.dataList.length){
            this.props.getProData();
        }
        

    }

    render() {
        return (
            <main className="productionContainer">
                <PublicHeader title="首页" confirm></PublicHeader>
                <section className="proListContainer">
                    <ul className="proListUl">
                        {
                            this.props.proData.dataList.map((item,index) => (
                                <li className="proListItem" key={item.product_id}>
                                    <div className="proSelect" onClick={this.toSelect.bind(this,index)}>
                                        <span className={`iconfont icon-success_fill ${item.selectStatus ? 'selectPro' : ''}`}></span>
                                        <span className="proName">{item.product_name}</span>
                                    </div>

                                    <div className="proItemEdit">
                                        <span className={`iconfont icon-offline_fill ${item.selectNum > 0 ? 'editActive' : ''}`} onClick={this.handleEdit.bind(this,index,-1)}></span>
                                            <span className="proNum">{item.selectNum} </span>
                                        <span className="iconfont icon-addition_fill" onClick={this.handleEdit.bind(this,index,1)}></span>
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

export default connect(state => ({ proData: state.proData }), { getProData,togleProduction,editProduction})(Production);