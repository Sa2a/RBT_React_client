import React, {Component} from 'react';
import AddUser from "./AddUser";
import DisplayUsers from "./DisplayUsers";
import {
    Container,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    UncontrolledDropdown
} from 'reactstrap';
import classnames from 'classnames';
import {connect} from "react-redux";

//parents,supervisors,drivers,admins

class UsersPage extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: this.props.tabId,
            search: this.props.tabId === 'addUser' ? null : this.getSearch()
        };
    }

    getSearch() {
        return (
            <UncontrolledDropdown>
                <DropdownToggle caret>
                    Search By
                </DropdownToggle>
                <DropdownMenu modifiers={{
                    setMaxHeight: {
                        enabled: true,
                        order: 890,
                        fn: (data) => {
                            return {
                                ...data,
                                styles: {
                                    ...data.styles,
                                    overflow: 'auto',
                                    maxHeight: 500,
                                },
                            };
                        },
                    },
                }}>
                    <DropdownItem>User Name</DropdownItem>
                    <DropdownItem>E-mail</DropdownItem>
                    <DropdownItem>Contact Number</DropdownItem>
                    <DropdownItem>Address</DropdownItem>

                </DropdownMenu>
            </UncontrolledDropdown>

        );
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
            if (tab === 'addUser') {
                this.setState({
                    search: null
                });
            } else {
                this.setState({
                    search: this.getSearch()
                });
            }


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
                                     this.toggle('parents', '#outline');
                                     this.props.getUsers("getAllParents");
                                 }}>
                            Parents
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{backgroundColor: '#007bff'}}
                                 className={classnames({active: this.state.activeTab === 'supervisors'})}
                                 onClick={() => {
                                     this.toggle('supervisors');
                                     this.props.getUsers("getAllSupervisors");

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
                                     this.props.getUsers("getAllDrivers");
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
                                     this.props.getUsers("getAllAdmins");
                                 }}
                        >
                            Admins
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab} style={{backgroundColor: "#9d96f5", paddingTop: 20}}>
                    {this.state.search}

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
                    </TabPane>

                </TabContent>
            </Container>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.Users
    }
};
const mapActionsToProps = (dispatch) => {
    return {
        getUsers: (getUserType) => {
            dispatch({type: 'getUsers', getUserType})
        }
    }
};
export default connect(mapStateToProps, mapActionsToProps)(UsersPage);