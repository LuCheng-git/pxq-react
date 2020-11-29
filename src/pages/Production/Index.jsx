import React, { Component } from 'react';
import PublicHeader from '../../components/PublicHeader/Index.jsx'

class Production extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <main className="productionContainer">
                <PublicHeader title="首页"></PublicHeader>
            </main>
        );
    }
}
 
export default Production;