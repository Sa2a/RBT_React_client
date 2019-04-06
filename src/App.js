import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./reactcomponents/Home";
import UsersPage from "./reactcomponents/users/UsersPage";
import Login from "./reactcomponents/Login";
import Header from "./reactcomponents/Header";
import Footer from "./reactcomponents/Footer";
import {connect} from "react-redux";

class App extends Component {

    render() {
        return (
            <Router>
                <Route path="/" component={() => <Header loggedIn={this.props.loggedIn}/>}/>

                {/*
                <Image className="carImage" src={bussImage} style={{width:"auto"}}/>
*/}
                <div className="body">
                    <Route path="/home" component={Home}/>
                    <Route path="/login" component={Login}/>


                    <Route exact path="/users" component={() => <UsersPage tabId="addUser"/>}/>
                    <Route exact path="/users/addUsers" component={() => <UsersPage tabId="addUser"/>}/>
                    <Route exact path="/users/parents" component={() => <UsersPage tabId="parents"/>}/>
                    <Route exact path="/users/supervisors" component={() => <UsersPage tabId="supervisors"/>}/>
                    <Route exact path="/users/drivers" component={() => <UsersPage tabId="drivers"/>}/>
                    <Route exact path="/users/admins" component={() => <UsersPage tabId="admins"/>}/>
                </div>
                <Footer/>
            </Router>
        );
    }
}
const mapStateToProps = (state) => {

    return {
        loggedIn: state.rootReducer.login.state,

    }
};
export default connect(mapStateToProps)(App);
