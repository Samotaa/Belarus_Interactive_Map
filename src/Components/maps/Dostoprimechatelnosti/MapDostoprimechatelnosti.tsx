import * as React from 'react';
import { useState, useMemo, useCallback, useRef } from 'react';
import  Map, { GeolocateControl, FullscreenControl, NavigationControl } from 'react-map-gl';
import ControlPanel from './ControlPanel';

import Dostoprim from './Dostoprimechatelnosti'
import Nav from '../../navbar/NavBar';
import GeocoderControl from '../../Search/Geo';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2Ftb3RhIiwiYSI6ImNrdGo3dnlrZTBpYzMycnFycXNxbHk4cnIifQ.iPh1u1wmQJodbRkjJKgreQ';



export default function MainMap(){

    const mapRef = React.useRef();

    const onSelectUniversity = useCallback(({ longitude, latitude }) => {
      mapRef.current?.flyTo({
        center: [longitude, latitude],
        zoom: 13,
        duration: 2000
      });
  }, []);

  function onSelectBack() {
    mapRef.current?.flyTo({
      zoom: 6.2,
      duration: 2000
    });
  };
    return(
        <div 
          id="map"
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
          }}
        >
            <Nav />
            <Map
            initialViewState={{
              latitude: 54,
              longitude: 28,
              zoom: 6.5,
              minZoom: 6.5
            }}
            mapStyle="mapbox://styles/samota/cl3300u14004015p2ghljzhu9"
            mapboxAccessToken={MAPBOX_TOKEN}
            ref={mapRef}
          >

            <Dostoprim />
            <FullscreenControl position="bottom-left" />
            <NavigationControl position="bottom-left" />
            <GeocoderControl  mapboxAccessToken={MAPBOX_TOKEN} position="top-left"/>
          
          </Map>

          <ControlPanel onSelectUniversity={onSelectUniversity} onSelectBack={onSelectBack}  />


        </div>
    )
}