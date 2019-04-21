import React, {Component} from 'react';
import {Col, Container, Pagination, PaginationItem, PaginationLink, Row,Alert} from "reactstrap";
import SelectParents from './selectparents/SelectParents';
import MyMap from "./map/MyMap";
import SetPickUpPoints from "./map/SetPickUpPoints";
import RouteDirections from "./map/RouteDirections";

export class SetRoute extends Component {
    constructor(props) {
        super(props);
        this.childTask = React.createRef();

        this.state = {
            tasks: [
                /*<SelectParents/>,*/
                <SetPickUpPoints ref={this.childTask}/>,
                <RouteDirections ref={this.childTask}/>
            ],
            title:['Set the pick up points from the start to the end'
                ,'Set the start then the end points first, then add the other pickup points'
            ],
            current: 0
        };
    }

    previous = () => {
        if (this.state.current > 0) {
            this.setState({
                current: this.state.current - 1,
            });
        }
    };
    next = () => {
        if (this.state.current < this.state.tasks.length-1) {
            this.setState({
                current: this.state.current + 1,
            });
        }
        console.log(this.childTask);
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col sm="12" md={{size: 6, offset: 3}}>
                        <Pagination size="lg" aria-label="Page navigation example">
                            <PaginationItem disabled={this.state.current === 0}>
                                <PaginationLink onClick={this.previous}>
                                    Previous
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem disabled={this.state.current === this.state.tasks.length-1}>
                                <PaginationLink onClick={this.next}>
                                    Next
                                </PaginationLink>
                            </PaginationItem>
                        </Pagination>
                    </Col>
                </Row>
                <Row>
                    <Alert color={'primary'}>
                        {this.state.title[this.state.current]}
                    </Alert>
                </Row>
                <Row>
                {
                    this.state.tasks[this.state.current ]
                }
                </Row>
            </Container>
        );
    }
}

export default SetRoute;