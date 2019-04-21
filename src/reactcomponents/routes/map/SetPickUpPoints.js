import React, {Component} from "react";
//import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps"
//import * as google from "google";
import {GoogleApiWrapper, InfoWindow, Map, Marker} from "google-maps-react";
import {connect} from "react-redux";
import axios from "axios";


export class SetPickUpPoints extends Component {
    constructor(props) {
        super(props);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            pickUpPoints: [],
            /*markers: null,*/
            geocoder: null,
            infowindow: null,

        };
    }
    mapClicked = (mapProps, map, clickEvent) => {
        const {google} = mapProps;

        let newPoints = Object.assign([], this.state.pickUpPoints);
        let latlng = {lat: clickEvent.latLng.lat(), lng: clickEvent.latLng.lng()};
        newPoints.push({latLng: latlng});
        this.setState({pickUpPoints: newPoints});
        let marker = new google.maps.Marker({
            position: latlng,
            map: map,
            index: this.state.pickUpPoints.length-1,
            title:'marker location',
            draggable: true
        });
        marker.addListener('dblclick', ()=>{
            let newPoints = Object.assign([], this.state.pickUpPoints);
            newPoints.splice(marker.index,1);
            this.setState({pickUpPoints: newPoints});
            marker.setMap(null);
        });
        marker.addListener('click', function() {
            map.setZoom(18);
            map.setCenter(marker.getPosition());
        });
        /* this.state.geocoder.geocode({'location': latlng},(results, status)=> {
             if (status === 'OK') {
                 if (results[0]) {
                     map.setZoom(11);
                     let marker = this.props.google.maps.Marker({
                         position: latlng,
                         map: map,
                         name:results[0].formatted_address
                     });
                     this.state.infowindow.setContent(results[0].formatted_address);
                     this.state.infowindow.open(map, marker);
                 } else {
                     window.alert('No results found');
                 }
             } else {
                 window.alert('Geocoder failed due to: ' + status);
             }
         });*/
    };

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    };

    save = ()=>{
      this.props.setPickUpPoints(this.state.pickUpPoints);
    };
    initMap = (mapProps, map)=>{
        const {google} = mapProps;
        this.setState({
            geocoder: new google.maps.Geocoder(),
            infowindow: new google.maps.InfoWindow,
        });
    };
    render() {
        /*let markers = this.state.pickUpPoints.map((point) => {
            return (
                <Marker
                    name={'Dolores park'}
                    onClick={this.onMarkerClick}
                    position={point.latLng}/>
            );
        });
*/
        if (!this.props.google) {
            return <div>Loading...</div>;
        }

        return (

            <Map google={this.props.google}
                 style={{height: '100%', width: '100%', position: 'relative'}}
                 className={'map'}
                 zoom={14}
                 onClick={this.mapClicked}
                 onReady={this.initMap}
            >

{/*
                {markers}
*/}

                {/*<Marker color={'white'}
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    onClick={this.onMarkerClick}
                    position={{lat: 37.778519, lng: -122.405640}}/>
                <Marker
                    name={'Dolores park'}
                    onClick={this.onMarkerClick}

                    position={{lat: 37.759703, lng: -122.428093}}/>
                <Marker/>

                <Marker
                    name={'Your position'}
                    position={{lat: 37.762391, lng: -122.439192}}
                    onClick={this.onMarkerClick}

                    /*icon={{
                        url: "http://maps.google.com/mapfiles/ms/icons/red.png",//"../../../photos/icons/location.png",
                        anchor: new google.maps.Point(32,32),
                        scaledSize: new google.maps.Size(64,64)
                    }} />
                    */}
            </Map>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        apiKey: state.rootReducer.apiKey
    }
};
const mapActionsToProps = (dispatch) => {
    return {
        setPickUpPoints: (pickUpPoints) => {
            dispatch({type: 'SETPICKUPPOINTS',pickUpPoints });
        }
    }
};
export default connect(mapStateToProps,mapActionsToProps)(GoogleApiWrapper({
    apiKey: 'AIzaSyB_eohRvcHqlhhPU7COoebF_gaKFSpXKcs',
    v: "3"
})(SetPickUpPoints));