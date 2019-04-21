import React, {Component} from 'react';
import {
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
    Col,
    Container,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Row,
    UncontrolledDropdown
} from 'reactstrap';
import userIcon from "../../photos/icons/userIcon.svg";
import axios from "axios";

class DisplayUsers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: null,
            Users: null,

        };
        this.getDefaultUsers();
    }

    getDefaultUsers= ()=>{
        let url = null;
        switch (this.props.tabId) {
            case 'parents': {
                url = '/get_find_parents';
                break;
            }
            case 'supervisors': {
                url = '/get_find_supervisors';
                break;
            }
            case 'drivers': {
                url = '/get_find_drivers';
                break;
            }
            case 'admins': {
                url = '/get_find_admins';
                break;
            }
        }

        axios({
            url: url,
            method: 'post',
        }).then((res) => {
            this.setState({
                search: this.getSearchMenu(),
                Users: res.data.Users,

            });
        }).catch(error => {console.log(error)});
    };
    search = (e) => {
        const {id} = e.target;
        axios({
            url: '/find_user',
            method: 'post',
            data: {
                type: id,
                usertype: this.props.tabId
            }
        }).then((res) => {
            return {
                Users: res.data.Users
            }
        }).catch(error => console.log(error));
    };

    getSearchMenu() {
        return (
            <UncontrolledDropdown>
                <DropdownToggle onClick={this.search} caret>
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
                    <DropdownItem id={'username'}>User Name</DropdownItem>
                    <DropdownItem id={'email'}>E-mail</DropdownItem>
                    <DropdownItem id={'contact_number'}>Contact Number</DropdownItem>
                    <DropdownItem id={'address'}>Address</DropdownItem>

                </DropdownMenu>
            </UncontrolledDropdown>

        );
    }

    render() {
        const displayUsers = this.state.Users != null ? this.state.Users.map((user) => {
            let dateArr=user.dateOfBirth.split('-');
            return (
                <Col sm={3} style={{paddingTop: 10, paddingBottom: 10}} key={user.id}>

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
                                Date of Birth: {dateArr[2]}/{dateArr[1]}/{dateArr[0]}<br/>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            )

        }) : null;
        return (
            <Container>
                <Row>
                    {displayUsers}
                </Row>
            </Container>
        );
    }
}

export default DisplayUsers;