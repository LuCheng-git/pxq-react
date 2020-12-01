import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UnorderedListOutlined, FileSearchOutlined ,RightOutlined } from '@ant-design/icons';
import './Index.less';

class PublicHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    
    static = {
        record: PropTypes.any,
        title: PropTypes.string.isRequired,
        confirm: PropTypes.any,
    }

    state = {
        navState:true,
    }

    toggleNavState = () =>{
        this.setState({navState:!this.state.navState})
    }

    render() {
        return (
            <header className="headerContainer">
                <UnorderedListOutlined className="headerLink" onClick={this.toggleNavState}></UnorderedListOutlined>
                <span className="headerTitle">{this.props.title}</span>
                {
                    this.props.record && <NavLink to="/record" exact className="header-link "><FileSearchOutlined /></NavLink>
                }
                {
                    this.props.confirm && <NavLink to="/" exact className="header-link ">确定</NavLink>
                }
                { this.state.navState && <aside className='navSideList' onClick={this.toggleNavState}>
                    <NavLink to="/" exact className="sideLink ">首页<RightOutlined /></NavLink>
                    <NavLink to="/balance" exact className="sideLink ">提现<RightOutlined /></NavLink>
                    <NavLink to="/helpcenter" exact className="sideLink ">帮助中心<RightOutlined /></NavLink>
                </aside>}
            </header>
        );
    }
}

export default PublicHeader;