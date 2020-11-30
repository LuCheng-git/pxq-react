import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UnorderedListOutlined ,FileSearchOutlined} from '@ant-design/icons';
import './Index.less';

class PublicHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.static = {
            record: PropTypes.any,
            title: PropTypes.string.isRequired,
            confirm: PropTypes.any,
        }
    }
    render() {
        return (
            <header className="headerContainer">
                <UnorderedListOutlined className="headerLink"></UnorderedListOutlined>
                <span className="headerTitle">{this.props.title}</span>
                {
                    this.props.record && <NavLink to="/record" exact className="header-link "><FileSearchOutlined /></NavLink>
                }
                {
                    this.props.confirm && <NavLink to="/" exact className="header-link ">确定</NavLink>
                }
            </header>
        );
    }
}

export default PublicHeader;