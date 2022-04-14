import * as React from 'react';
import { useState, useMemo, useCallback, useRef } from 'react';
import Map, { Marker, Popup, GeolocateControl, FullscreenControl, NavigationControl, ScaleControl } from 'react-map-gl';
import Pin from './Pin';
import CITIES from '../../../cities.json';
import ControlPanel from './ControlPanel';

const TOKEN = 'pk.eyJ1Ijoic2Ftb3RhIiwiYSI6ImNrdGo3dnlrZTBpYzMycnFycXNxbHk4cnIifQ.iPh1u1wmQJodbRkjJKgreQ';

export default function Universities() {

    const mapRef = React.useRef();
    const [popupInfo, setPopupInfo] = useState(null);

    const pins = useMemo(() => CITIES.map((city, index) => (
        <Marker
            key={`marker-${index}`}
            longitude={city.longitude}
            latitude={city.latitude}
            anchor="center">
            <Pin onClick={() => setPopupInfo(city)} />
        </Marker>)), []);

  

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
    

    return (
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
          <Map
            initialViewState={{
              latitude: 54,
              longitude: 28,
              zoom: 6.2,
              minZoom: 6.2
            }}
            mapStyle="mapbox://styles/samota/cktjtukhi4cs818wbxzgoyx12"
            mapboxAccessToken={TOKEN}
            ref={mapRef}
     
          >

          {popupInfo && (
            <Popup
              anchor="bottom"
              longitude={popupInfo.longitude}
              latitude={popupInfo.latitude}
              closeOnClick={false}
              onClose={() => setPopupInfo(null)}
              closeButton={true} 
              closeOnMove={true}
              maxWidth="350px"
              minWidth="350px">
                <div>
                    {popupInfo.city}, {popupInfo.name} | {' '}
                    <a target="_new" href={`https://ru.wikipedia.org/wiki/${popupInfo.site}`}>
                        Wikipedia
                    </a>
                </div>
                <img width="100%" src={popupInfo.image} />
               
            </Popup>)
          }

          {pins}
          <GeolocateControl position="bottom-right" />
          <FullscreenControl position="bottom-right" />
          <NavigationControl position="bottom-right" />
          <Pin />
          </Map>
          <ControlPanel onSelectUniversity={onSelectUniversity} onSelectBack={onSelectBack}  />

        </div>);
}