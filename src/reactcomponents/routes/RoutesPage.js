import React, {Component} from 'react';
import {Container, Nav, NavItem, NavLink, TabContent, TabPane} from "reactstrap";
import classnames from "classnames";
import SetRoute from "./SetRoute";
export class RoutesPage extends Component {
    /*render() {
        return (
            <MyMap
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB_eohRvcHqlhhPU7COoebF_gaKFSpXKcs&callback=initMap"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: 700}} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        );
    }*/
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
                                 className={classnames({active: this.state.activeTab === 'setRoutes'})}
                                 onClick={() => {
                                     this.toggle('setRoutes');
                                 }}
                        >
                            Set Routes
                        </NavLink>
                    </NavItem>

                </Nav>
                <TabContent activeTab={this.state.activeTab} style={{backgroundColor: "#5858c1", paddingTop: 20}}>
                    {this.state.search}

                    <TabPane tabId="setRoutes">
                        <SetRoute/>
                    </TabPane>
                </TabContent>
            </Container>

        );
    }
}
export default RoutesPage;