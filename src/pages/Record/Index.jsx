import React, { Component } from 'react';
import { NavLink, Switch, Route,Redirect} from 'react-router-dom';
import PublicHeader from '../../components/PublicHeader/Index';
import RecordList from './components/RecordList';
import './Index.less'
class Record extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navFlagBar:'17%'
        }
    }

    setNavFlagBar (type) {
        let navFlagBar
        switch(type){
            case 'passed':
                navFlagBar = '17%';
                break;
            case 'audited':
                navFlagBar = '50%';
                break;
            case 'failed':
                navFlagBar = '83%';
                break;
                default:
                navFlagBar = '17%';  
        }
        this.setState({navFlagBar});
    }

    
    componentWillReceiveProps(nextProps){
        let currenType = this.props.location.pathname.split('/')[2];
        let type = nextProps.location.pathname.split('/')[2];
        if(currenType !== type){
          this.setNavFlagBar(type); 
        }
      }

    componentWillMount(){
        console.log(this.props.history.location.pathname.split('/')[2]);
        let type = this.props.history.location.pathname.split('/')[2]
        this.setNavFlagBar(type)
    }

    render() {
        return (
            <main className="recordContainer">
                <PublicHeader title="记录"></PublicHeader>
                <section className="recordNavCon">
                    <nav className="recordNav">
                            <NavLink to="/record/passed" className="navLink" >已通过</NavLink>
                            <NavLink to="/record/audited" className="navLink">待审核</NavLink>
                            <NavLink to="/record/failed" className="navLink">未通过</NavLink>
                    </nav>
                    <i className="navFlagBar" style={{left:this.state.navFlagBar}}></i>
                </section>

                <Switch>
                    <Route path="/record/passed"  component={RecordList}></Route>
                    <Route path="/record/audited" component={RecordList}></Route>
                    <Route path="/record/failed"  component={RecordList}></Route>
                    <Redirect from="/record" to="/record/passed" exact component={RecordList}></Redirect>
                </Switch>
            </main>
        );
    }
}

export default Record;