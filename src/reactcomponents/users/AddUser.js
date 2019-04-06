import React, {Component} from 'react';
import {Button, Col, Form, FormFeedback, FormGroup, FormText, Input, Label} from 'reactstrap';
import Container from "reactstrap/es/Container";
import {connect} from "react-redux";
import PopUp from "../reusecomponents/PopUp";

class AddUser extends Component {

    state = {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        contactNumber: null,
        nationalNumber: null,
        address: null,
        DayOfBirth: null,
        MonthOfBirth: null,
        yearOfBirth: null,
        userType: 'parent',

        validation: {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            contactNumber: null,
            nationalNumber: null,
            address: null
        }
    };
    onInputChange = (e) => {
        const {id, value} = e.target;
        this.setState({[id]: value});
        let pattern;
        if (id === "firstName" || id === "lastName") {
            pattern = /^[a-zA-Z]+$/;

        }
        else if (id === "email") {
            pattern = /^.+@.+?\.[a-zA-Z]{2,3}$/;
        }
        else if(id === "contactNumber")
            pattern=/01\d{9}/;
        else if(id === "nationalNumber")
            pattern=/\d{14}/;

        if (pattern!=null && pattern.test(value)) {
            this.setState({validation: {[id]: true}});
        } else
            this.setState({validation: {[id]: false}});
        console.log(this.state);

    };
    onRadioChecked = (e) => {
        const {name, id, checked} = e.target;
        if (checked)
            this.setState({[name]: id});
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);
    };

    render() {
        return (
            <Container style={{color: "#ffffff"}}>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup row={true}>
                        <Col sm={2}>
                            <Label for="firstName">First Name</Label>
                        </Col>
                        <Col sm={4}>
                            <Input id="firstName" type="text" size="sm" onChange={this.onInputChange}
                                   valid={this.state.validation.firstName}
                                   invalid={this.state.validation.firstName === false} required/>
                            <FormFeedback invalid>
                                required alphabet letters!
                            </FormFeedback>
                        </Col>

                    </FormGroup>
                    <FormGroup row={true}>
                        <Col sm={2}>
                            <Label for="lastName">Last Name</Label>
                        </Col>
                        <Col sm={4}>
                            <Input id="lastName" type="text" size="sm" onChange={this.onInputChange}
                                   valid={this.state.validation.lastName}
                                   invalid={this.state.validation.lastName === false} required/>
                            <FormFeedback invalid>
                                required alphabet letters!
                            </FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row={true}>
                        <Col sm={2}>
                            <Label for="email">Email</Label>
                        </Col>
                        <Col sm={4}>
                            <Input id="email" type="email" size="sm" onChange={this.onInputChange}
                                   valid={this.state.validation.email} invalid={this.state.validation.email === false} required/>
                            <FormFeedback invalid>
                                invalid email!
                            </FormFeedback>
                            <FormText>Example: joe@gmail.com</FormText>

                        </Col>
                    </FormGroup>
                    <FormGroup row={true}>
                        <Col sm={2}>
                            <Label for="password">Password</Label>
                        </Col>
                        <Col sm={4}>
                            <Input id="password" type="password" size="sm" pattern=".{5,32}"
                                   title="minimum 5 characters, and maximum 32" onChange={this.onInputChange} required/>
                        </Col>
                    </FormGroup>
                    <FormGroup row={true} inline>
                        <Col sm={2}>
                            <Label for="contactNumber">Contact Number</Label>
                        </Col>
                        <Col sm={4}>
                            <Input id="contactNumber" type="text" size="sm" onChange={this.onInputChange}
                                   valid={this.state.validation.contactNumber} invalid={this.state.validation.contactNumber === false} required/>
                            <FormFeedback invalid>
                                Needs 11 digits starts with 01
                            </FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row={true} inline>
                        <Col sm={2}>
                            <Label for="nationalNumber">National Number</Label>
                        </Col>
                        <Col sm={4}>
                            <Input id="nationalNumber" type="text"size="sm" onChange={this.onInputChange}
                                   valid={this.state.validation.nationalNumber} invalid={this.state.validation.nationalNumber === false} required/>
                            <FormFeedback invalid>
                                Needs 14 digits
                            </FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row={true}>
                        <Col sm={2}>
                            <Label for="address">Address</Label>
                        </Col>
                        <Col sm={4}>
                            <Input id="address" type="text" size="sm" onChange={this.onInputChange} required/>
                        </Col>
                    </FormGroup>
                    <FormGroup row={true}>
                        <Col sm={2}>
                            <Label for="DayOfBirth">Date of Birth</Label>
                        </Col>
                        <Col sm={1}>
                            <Input id="DayOfBirth" type="number" size="sm" min={1} max={31} placeholder="dd"
                                   onChange={this.onInputChange} required/>
                        </Col>
                        <Col sm={1}>
                            <Input id="MonthOfBirth" type="number" size="sm" min={1} max={12} placeholder="MM"
                                   onChange={this.onInputChange}/>
                        </Col>
                        <Col sm={1}>
                            <Input id="yearOfBirth" type="number" size="sm" min={1950} placeholder="yyyy"
                                   onChange={this.onInputChange} required/>
                        </Col>

                    </FormGroup>


                    <FormGroup row={true}>
                        <Col sm={2}>
                            <Label for='parent'>User Type</Label>
                        </Col>
                        <Col sm={4}>

                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name='userType' id="parent" defaultChecked
                                           onChange={this.onRadioChecked}/>{' '}
                                    Parent
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name='userType' id="supervisor"
                                           onChange={this.onRadioChecked}/>{' '}
                                    Supervisor
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name='userType' id="driver"
                                           onChange={this.onRadioChecked}/>{' '}
                                    Driver
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name='userType' id="admin"
                                           onChange={this.onRadioChecked}/>{' '}
                                    Admin
                                </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>

                    <FormGroup row={true}>
                        <Col sm={3}/>
                        <Col>
                            <Button>Add User</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.Users
    }
};
const mapActionsToProps = (dispatch) => {
    return {
        addUser: (user) => {
            dispatch({type: 'addUser', user})
        }
    }
};
export default connect(mapStateToProps, mapActionsToProps)(AddUser);