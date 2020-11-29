import React, { Component } from 'react';
import PublicHeader from '../../components/PublicHeader/Index';

class Record extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <main className="recordContainer">
                <PublicHeader title="记录"></PublicHeader>
            </main>
        );
    }
}
 
export default Record;