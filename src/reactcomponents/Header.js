import React, {Component} from 'react';
import {Button, Collapse, Media, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from 'reactstrap';
import logo from "../photos/icons/logo.svg";
import {connect} from "react-redux";
import ButtonDropDown from "./reusecomponents/ButtonDropDown";
import {Link} from "react-router-dom";


class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            dropdownOpen: false,

        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
            dropdownOpen: !this.state.dropdownOpen

        });
    }

    /*
        loginT(e){this.props.toggleLogin();}
    */

//
    render() {

        return (
            <div style={{backgroundColor: "#353992"}}>
                {/*
                <Image className="bussImage" src={bussImage} style={{height: 600, width: "100%"}} resizeMode="cover"/>
*/}
                <Navbar light expand="md" style={{paddingTop: 20}}>

                    <NavbarBrand>
                        <Media>
                            <Link to="/home">

                                <Media body>
                                    <Media heading>
                                        <Media style={{paddingLeft: 80}}>
                                            <Media object src={logo} alt="Generic placeholder image"/>
                                        </Media>
                                        RBT RealTimeTracking
                                    </Media>
                                </Media>
                            </Link>
                        </Media>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        {this.getNav()}
                    </Collapse>
                </Navbar>


            </div>
        );
    }

    getNav() {
        console.log(this.props.loggedIn);
        if (this.props.loggedIn) {
            return (
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Link to="/home">
                            <Button color='primary' to="home">Home</Button>
                        </Link>
                    </NavItem>

                    <NavItem>
                        <ButtonDropDown text={{name: "Track", ref: "track"}} items={[
                            {name: "Track", ref: "track"},
                            {name: "Another Action", ref: "track2"},
                            {name: "Another Action", ref: "track3"}
                        ]}/>
                    </NavItem>
                    <NavItem>
                        <ButtonDropDown text={{name: "Routes", ref: "routes"}} items={[
                            {name: "Routes", ref: "routes"},
                            {name: "Another Action", ref: "Routes2"},
                            {name: "Another Action", ref: "Routes3"}
                        ]}/>
                    </NavItem>
                    <NavItem>

                        <ButtonDropDown text={{name: "Users", ref: "/users"}} items={[
                            {name: "Add Users", ref: "/users/addUsers"},
                            {name: "Parents", ref: "/users/parents"},
                            {name: "Supervisors", ref: "/users/supervisors"},
                            {name: "Drivers", ref: "/users/drivers"},
                            {name: "Admins", ref: "/users/admins"}
                        ]}/>

                    </NavItem>
                    <NavItem>
                        <Link to="/contactus">
                            <Button color='primary' >Contact US</Button>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/home">
                            <Button onClick={this.props.logout}>Logout</Button>
                        </Link>
                    </NavItem>
                </Nav>);
        } else {
            return (<Nav className="ml-auto" navbar>
                <NavItem>
                    <Link to="/home">
                        <Button color='primary'>Home</Button>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/about">
                        <Button color='primary'>About</Button>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/services">
                        <Button color='primary'>Services</Button>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/contacts">
                        <Button color='primary'>Contacts</Button>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/login">
                        <Button>Login</Button>
                    </Link>
                </NavItem>
            </Nav>);
        }
    }


}

const mapStateToProps = (state) => {
     return {
     }
};
const mapActionsToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch({type: 'LOGOUT'})
        }
    }
};
export default connect(mapStateToProps, mapActionsToProps)(Header);
