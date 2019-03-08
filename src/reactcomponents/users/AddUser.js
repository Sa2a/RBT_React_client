import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from 'reactstrap';
import Container from "reactstrap/es/Container";
import {connect} from "react-redux";

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
        MothOfBirth: null,
        yearOfBirth: null,
        userType: null
    };
    onInputChange = (e) => {
        const {id, value} = e.target;
        this.setState({[id]: value});
    };
    onRadioChecked = (e) => {
        const {name, id, checked} = e.target;
        if (checked)
            this.setState({[name]: id});

    };
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addUser(this.state);
    };

    render() {
        return (

            <Container>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup row={true}>
                        <Col sm={2}>
                            <Label for="firstName">First Name</Label>
                        </Col>
                        <Col sm={4}>
                            <Input id="firstName" type="text" size="sm" onChange={this.onInputChange}/>
                        </Col>

                    </FormGroup>
                    <FormGroup row={true}>
                        <Col sm={2}>
                            <Label for="lastName">Last Name</Label>
                        </Col>
                        <Col sm={4}>
                            <Input id="lastName" type="text" size="sm" onChange={this.onInputChange}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row={true}>
                        <Col sm={2}>
                            <Label for="email">Email</Label>
                        </Col>
                        <Col sm={4}>
                            <Input id="email" type="email" size="sm" onChange={this.onInputChange}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row={true}>
                        <Col sm={2}>
                            <Label for="password">password</Label>
                        </Col>
                        <Col sm={4}>
                            <Input id="password" type="password" size="sm" onChange={this.onInputChange}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row={true} inline>
                        <Col sm={2}>
                            <Label for="contactNumber">Contact Number</Label>
                        </Col>
                        <Col sm={4}>
                            <Input id="contactNumber" type="number" size="sm" onChange={this.onInputChange}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row={true} inline>
                        <Col sm={2}>
                            <Label for="nationalNumber">national Number</Label>
                        </Col>
                        <Col sm={4}>
                            <Input id="nationalNumber" type="number" size="sm" onChange={this.onInputChange}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row={true}>
                        <Col sm={2}>
                            <Label for="address">address</Label>
                        </Col>
                        <Col sm={4}>
                            <Input id="address" type="text" size="sm" onChange={this.onInputChange}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row={true}>
                        <Col sm={2}>
                            <Label for="DayOfBirth">Date of Birth</Label>
                        </Col>
                        <Col sm={1}>
                            <Input id="DayOfBirth" type="number" size="sm" placeholder="dd"
                                   onChange={this.onInputChange}/>
                        </Col>
                        <Col sm={1}>
                            <Input id="MothOfBirth" type="number" size="sm" placeholder="MM"
                                   onChange={this.onInputChange}/>
                        </Col>
                        <Col sm={1}>
                            <Input id="yearOfBirth" type="number" size="sm" placeholder="yyyy"
                                   onChange={this.onInputChange}/>
                        </Col>

                    </FormGroup>


                    <FormGroup row={true}>
                        <Col sm={2}>
                            <Label for='parent'>User Type</Label>
                        </Col>
                        <Col sm={4}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name='userType' id="parent"
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
        users: state.Users
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