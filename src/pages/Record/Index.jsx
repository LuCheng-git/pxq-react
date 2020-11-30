import React, { Component } from 'react';
import { NavLink, Switch, Route,Redirect} from 'react-router-dom';
import PublicHeader from '../../components/PublicHeader/Index';
import RecordList from './components/RecordList';
class Record extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <main className="recordContainer">
                <PublicHeader title="记录"></PublicHeader>
                <section className="recordNavCon">
                    <nav className="recordNav">
                            <NavLink to="/record/passed" className="navLink">已通过</NavLink>
                            <NavLink to="/record/audited" className="navLink">待审核</NavLink>
                            <NavLink to="/record/failed" className="navLink">未通过</NavLink>
                    </nav>
                </section>

                <Switch>
                    <Route path="/record/passed"  component={RecordList}></Route>
                    <Route path="/record/audited" component={RecordList}></Route>
                    <Route path="/record/failed"  component={RecordList}></Route>
                    <Redirect to="/record" exact component={RecordList}></Redirect>
                </Switch>
            </main>
        );
    }
}

export default Record;