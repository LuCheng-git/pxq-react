import React, { Component } from 'react'
import PublicHeader from '../../components/PublicHeader/Index.jsx'

class HelpCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <main className="HelpCenterContainer">
                <PublicHeader title="帮助中心"></PublicHeader>
            </main>
        );
    }
}
 
export default HelpCenter;