import React, { Component } from 'react'
import PublicHeader from '../../components/PublicHeader/Index.jsx'

class Balance extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <main className="balanceContainer">
                <PublicHeader title="提现"></PublicHeader>
            </main>
        );
    }
}
 
export default Balance;