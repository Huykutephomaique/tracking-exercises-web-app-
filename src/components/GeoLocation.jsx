import React from 'react';

class GeoLocation extends React.Component {
    constructor(props) {
      super(props);
      this.statusRef = React.createRef();
      this.mapLinkRef = React.createRef();
    }
  
    geoFindMe = () => {
      const status = this.statusRef.current;
      const mapLink = this.mapLinkRef.current;
  
      mapLink.href = "";
      mapLink.textContent = "";
  
      const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
  
        status.textContent = "";
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
      };
  
      const error = () => {
        status.textContent = "Unable to retrieve your location";
      };
  
      if (!navigator.geolocation) {
        status.textContent = "Geolocation is not supported by your browser";
      } else {
        status.textContent = "Locating…";
        navigator.geolocation.getCurrentPosition(success, error);
      }
    };
  
    render() {
      return (
        <div>
          <p ref={this.statusRef}></p>
          <a ref={this.mapLinkRef} target="_blank" rel="noopener noreferrer"></a>
          <button onClick={this.geoFindMe}>Find Me</button>
        </div>
      );
    }
  }
  
  export default GeoLocation;