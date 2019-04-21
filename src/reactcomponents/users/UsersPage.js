import React, {Component} from 'react';
import AddUser from "./AddUser";
import DisplayUsers from "./DisplayUsers";
import {Container, Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import classnames from 'classnames';
import {connect} from "react-redux";

//parents,supervisors,drivers,admins
/*
    <TabPane tabId="addUser">
                        <AddUser/>
                    </TabPane>
                    <TabPane tabId="parents">
                        <DisplayUsers/>
                    </TabPane>
                    <TabPane tabId="supervisors">
                        <DisplayUsers/>
                    </TabPane>
                    <TabPane tabId="drivers">
                        <DisplayUsers/>
                    </TabPane>
                    <TabPane tabId="admins">
                        <DisplayUsers/>
 */
class UsersPage extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: this.props.tabId,
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <Container>

                <Nav className="mr-auto" tabs style={{
                    paddingTop: 20, paddingLeft: 20, padBottom: 15,
                    color: "#fbfbff"
                }}>
                    <NavItem outline>
                        <NavLink outline style={{backgroundColor: '#007bff'}}
                                 className={classnames({active: this.state.activeTab === 'addUser'})}
                                 onClick={() => {
                                     this.toggle('addUser');
                                 }}
                        >
                            Add Users
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{backgroundColor: '#007bff'}}
                                 className={classnames({active: this.state.activeTab === 'parents'})}
                                 onClick={() => {
                                     this.toggle('parents');
                                 }}>
                            Parents
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{backgroundColor: '#007bff'}}
                                 className={classnames({active: this.state.activeTab === 'supervisors'})}
                                 onClick={() => {
                                     this.toggle('supervisors');
                                 }}
                        >
                            Supervisors
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{backgroundColor: '#007bff'}}
                                 className={classnames({active: this.state.activeTab === 'drivers'})}
                                 onClick={() => {
                                     this.toggle('drivers');
                                 }}
                        >
                            Drivers
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{backgroundColor: '#007bff'}}
                                 className={classnames({active: this.state.activeTab === 'admins'})}
                                 onClick={() => {
                                     this.toggle('admins');
                                 }}
                        >
                            Admins
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab} style={{backgroundColor: "#5858c1", paddingTop: 20}}>
                    {this.state.search}

                    <TabPane tabId="addUser">
                        <AddUser/>
                    </TabPane>
                    <TabPane tabId="parents">
                        <DisplayUsers tabId={'parents'}/>
                    </TabPane>
                    <TabPane tabId="supervisors">
                        <DisplayUsers  tabId="supervisors"/>
                    </TabPane>
                    <TabPane tabId="drivers">
                        <DisplayUsers tabId="drivers"/>
                    </TabPane>
                    <TabPane tabId="admins">
                        <DisplayUsers tabId="admins"/>
                    </TabPane>

                </TabContent>
            </Container>

        );
    }
}

export default UsersPage;