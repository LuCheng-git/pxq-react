import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Index.less';

class PublicHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }

        this.static = {
            title:PropTypes.string.isRequired
        }
    }
    render() { 
        return (
            <header className="headerContainer">
                <span className="headerTitle">{this.props.title}</span>
            </header>
        );
    }
}
 
export default PublicHeader;