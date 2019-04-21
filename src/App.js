import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./reactcomponents/Home";
import UsersPage from "./reactcomponents/users/UsersPage";
import Login from "./reactcomponents/Login";
import Header from "./reactcomponents/Header";
import Footer from "./reactcomponents/Footer";
import {connect} from "react-redux";
import {CookiesProvider} from 'react-cookie';
import RoutesPage from "./reactcomponents/routes/RoutesPage";

class App extends Component {

    render() {
        return (
            <CookiesProvider>
                <Router>
                    <Header/>
                    {/*
                <Image className="carImage" src={bussImage} style={{width:"auto"}}/>
*/}
                    <div className="body">
                        <Route exact path="/" component={Home}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/login" component={Login}/>


                        <Route exact path="/users" component={() => <UsersPage tabId="addUser"/>}/>
                        <Route  path="/users/addUsers" component={() => <UsersPage tabId="addUser"/>}/>
                        <Route  path="/users/parents" component={() => <UsersPage tabId="parents"/>}/>
                        <Route  path="/users/supervisors" component={() => <UsersPage tabId="supervisors"/>}/>
                        <Route  path="/users/drivers" component={() => <UsersPage tabId="drivers"/>}/>
                        <Route  path="/users/admins" component={() => <UsersPage tabId="admins"/>}/>


                        <Route exact path="/routes" component={() => <RoutesPage tabId='setRoutes'/>}/>

                    </div>
                    <Footer/>
                </Router>
            </CookiesProvider>
        );
    }
}
/*
const mapStateToProps = (state) => {

    return {
        loggedIn: state.rootReducer.login.state,

    }
};*/
export default (App);
