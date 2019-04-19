import React, {Component} from "react";
//import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps"
//import * as google from "google";
import {GoogleApiWrapper, InfoWindow, Map, Marker} from "google-maps-react";
import * as google from "google";

export class MyMap extends Component {
    constructor(props) {
        super(props);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            pickUpPoints: [],
            markers: null
        };

    }

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    };
    mapClicked = (mapProps, map, clickEvent) => {
        // ...
        console.log(map);
        console.log(clickEvent);
        let newPoints = Object.assign([], this.state.pickUpPoints);
        newPoints.push({latLng: clickEvent.latLng});
        this.setState({pickUpPoints: newPoints});
     /*   let geocoder = new google.maps.Geocoder;
        console.log(geocoder);*/
    };

    render() {
        /* let bounds = new this.props.google.maps.LatLngBounds();
       for (let i = 0; i < this.state.points.length; i++) {
           bounds.extend(this.state.points[i]);
       }*/
        let markers = this.state.pickUpPoints.map((point) => {

            return (
                <Marker
                    name={'Dolores park'}
                    onClick={this.onMarkerClick}
                    position={point.latLng}/>
            );
        });

        if (!this.props.google) {
            return <div>Loading...</div>;
        }

        return (

            <Map google={this.props.google}
                 style={{width: '100%', height: '100%', position: 'relative'}}
                 className={'map'}
                 zoom={14}
                 onClick={this.mapClicked}
            >
                {markers}
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
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <p>{this.state.selectedPlace.name}</p>
                    </div>
                </InfoWindow>
            </Map>
            /*<Map google={this.props.google} zoom={14}
                 initialCenter={{
                     lat: 42.39,
                     lng: -72.52
                 }}
                 bounds={bounds}
            >
                <Marker onClick={this.onMarkerClick} name={"Current location"}/>
                <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>*/
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyB_eohRvcHqlhhPU7COoebF_gaKFSpXKcs",
    v: "3"
})(MyMap);

/*
const MyMapComponent =  withScriptjs(withGoogleMap((props) => {
        return <GoogleMap
            defaultZoom={8}
            defaultCenter={{lat: -34.397, lng: 150.644}}
        >
            {props.isMarkerShown && <Marker position={{lat: -34.397, lng: 150.644}} onClick={props.onMarkerClick}/>}
        </GoogleMap>
    }
));

export class MyMap extends React.PureComponent {
    state = {
        isMarkerShown: false,
    };

    componentDidMount() {
        this.delayedShowMarker()
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({isMarkerShown: true})
        }, 3000)
    };

    handleMarkerClick = () => {
        this.setState({isMarkerShown: false})
        this.delayedShowMarker()
    };

    render() {
        return (
            <MyMapComponent
                isMarkerShown={this.state.isMarkerShown}
                onMarkerClick={this.handleMarkerClick}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB_eohRvcHqlhhPU7COoebF_gaKFSpXKcs&callback=initMap"
                loadingElement={<div style={{height: `100%`}}/>}
                containerElement={<div style={{height: 700}}/>}
                mapElement={<div style={{height: `100%`}}/>}
            />
        )
    }
};
export default MyMap;*/
