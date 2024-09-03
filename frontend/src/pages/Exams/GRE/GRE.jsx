import React from 'react'
import "./GRE.css"


import { Button } from 'bootstrap'

import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import Image from "./../../../assets/CoverS.png"
import FlatCards from './FlatCards/FlatCards'

const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '50vh',
};
const center = {
  lat: 21.2764561, // default latitude
  lng: 79.1087342, // default longitude
};

function GRE() {

const { isLoaded, loadError } = useLoadScript({
  googleMapsApiKey: 'AIzaSyCD055QCzfsDwI8lZ7uda_PhxpxmldVCWY',
  libraries,
});

if (loadError) {
  return <div>Error loading maps</div>;
}


if (!isLoaded) {
  return <div>Loading maps</div>;
}

  // const [viewport, setViewport] = React.useState({
  //   width: '100%',
  //   height: '100%',
  //   latitude: 37.7577,
  //   longitude: -122.4376,
  //   zoom: 8,
  // });
  return (
    <div>
       <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 p-0">
          <div className="hero-container text-center">
          {/* <button className="btn btn-primary btn-lg">Get Started</button> */}
            <img src={Image} alt="Hero Image" className="img-fluid" />
            
            <div className="hero-content">
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  <br></br>
   <FlatCards/>
 

  {/* <div style={{ width: '500px', height: '500px' }}> */}
 
  <h3 style={{textAlign: "center"}}>Visit Us At Suvidha Foundation</h3>
  <div className='mapss'>
 
    <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={{ lat: 21.2764561, lng:79.1087342 }} />  
      </GoogleMap>
      </div>
      {/* </div> */}
  

    </div>
  )
}


export default GRE
