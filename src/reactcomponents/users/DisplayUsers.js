import React, {Component} from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Row} from 'reactstrap';
import {connect} from "react-redux";
import userIcon from "../../photos/icons/userIcon.svg";

/*
 {
        firstName: 'khaled',
        lastName: 'elsaka',
        email: 'khaled.elsaka25@gmail.com',
        password: 'sadf',
        contactNumber: '213',
        nationalNumber: '132',
        address: 'adg',
        DayOfBirth: '32',
        MonthOfBirth: '2',
        yearOfBirth: '3133',
        userType: 'parent' }
        */
class DisplayUsers extends Component {

    render() {
        const displayUsers = this.props.users!=null? this.props.users.map((user) => {
            return (
                <Col sm={3} style={{paddingTop :10,paddingBottom:10}}>

                    <Card>
                        <CardImg top width="100%"
                                 src={userIcon}
                                 alt="Card image cap"/>
                        <CardBody>
                            <CardTitle>{user.firstName} {user.lastName}</CardTitle>
                            <CardSubtitle>{user.email} </CardSubtitle>
                            <CardText>
                                {user.address}<br/>
                                +2{user.contactNumber}<br/>
                                {user.nationalNumber}<br/>
                                {user.DayOfBirth}/{user.MothOfBirth}/{user.yearOfBirth}<br/>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            )

        }) :null;
        return (
            <Container>
                <Row>
                    {displayUsers}
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.Users
    }
};
/*const mapActionsToProps = (dispatch) => {
    return {
        addUser: (user) => {
            dispatch({type: 'addUser', user})
        }
    }
};*/
export default connect(mapStateToProps)(DisplayUsers);