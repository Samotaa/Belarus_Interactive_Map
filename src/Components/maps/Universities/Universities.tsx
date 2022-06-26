import * as React from 'react';
import { useState, useMemo, useCallback, useRef } from 'react';
import Map, { Marker, Popup, GeolocateControl, FullscreenControl, NavigationControl, ScaleControl } from 'react-map-gl';
import Pin from './Pin';
import CITIES from './cities.json';
import ControlPanel from './ControlPanel';


const TOKEN = 'pk.eyJ1Ijoic2Ftb3RhIiwiYSI6ImNrdGo3dnlrZTBpYzMycnFycXNxbHk4cnIifQ.iPh1u1wmQJodbRkjJKgreQ';



export default function Universities() {

    const mapRef = React.useRef();
    const [popupInfo, setPopupInfo] = useState(null);
    const [onloadInfo, setOnloadInfo] = useState(popupInfo);

  const fix = () => {
    setOnloadInfo(popupInfo)
    console.log(onloadInfo)
  }

   
    
    const pins = useMemo(() => CITIES.map((city, index) => (

        <Marker
            key={`marker-${index}`}
            longitude={city.longitude}
            latitude={city.latitude}
            anchor="center">
            <Pin 
            onClick={() => {
              setPopupInfo(null) 
              setTimeout(() =>{setPopupInfo(city)}, 200)
            
              }    
            } 
            
            />
        </Marker>)), 
        []);
    

    return (
        <div >
          
          {popupInfo && (
            <Popup
              anchor="bottom"
              longitude={popupInfo.longitude}
              latitude={popupInfo.latitude}
              closeOnClick={false}              
              onClose={() => {setPopupInfo(null)}}
              closeButton={true} 
              closeOnMove={true}
              maxWidth="300px"
              minWidth="300px">
                <div>
                    {popupInfo.city}, {popupInfo.name} | {' '}
                    <a 
                    className="Wiki_link" 
                    target="_new" 
                    href={`https://ru.wikipedia.org/wiki/${popupInfo.site}`}>
                        Wikipedia
                    </a>
                </div>
                <img width="100%" src={popupInfo.image} />
            </Popup>)
          }
          {pins}
          <Pin />

        
        </div>);
        
}