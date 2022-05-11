import  React, {useState, useEffect, useMemo, useCallback} from 'react';
import {render} from 'react-dom';
import ControlPanel from './control-panel';
import  Map, { GeolocateControl, FullscreenControl, NavigationControl,Source, Layer } from 'react-map-gl';
import {dataLayer} from './districts-style';
import {updatePercentiles} from './utils';
import './districts.css'
import Nav from '../../navbar/NavBar';
import GeocoderControl from '../../Search/Geo';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2Ftb3RhIiwiYSI6ImNrdGo3dnlrZTBpYzMycnFycXNxbHk4cnIifQ.iPh1u1wmQJodbRkjJKgreQ'; // Set your mapbox token here

export default function App() {
  const [year, setYear] = useState(2015);
  const [allData, setAllData] = useState(null);
  const [hoverInfo, setHoverInfo] = useState(null);

  useEffect(() => {

    fetch(
      'https://raw.githubusercontent.com/Samotaa/geojson/master/Belarus_district_population_geojson'
    )
      .then(resp => resp.json())      
      .then(json => setAllData(json))
      .catch(err => console.error('Could not load data', err)); 
  }, []);

  const onHover = useCallback(event => {
    const {
      features,
      point: {x, y}
    } = event;
    const hoveredFeature = features && features[0];

    setHoverInfo(hoveredFeature && {feature: hoveredFeature, x, y});
  }, []);

  const onLeave = useCallback(event => {
    setHoverInfo(null);
  }, [])

  const data = useMemo(() => {

    return allData && updatePercentiles(allData, f => f.properties.population[year] );
  });

  return (
    <div
    id="map"
    style={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
    }}>
      <Nav />
      <Map
        initialViewState={{
          latitude: 54,
          longitude: 28,
          zoom: 6.5,
          minZoom: 6.5
        }}
        mapStyle="mapbox://styles/samota/cl320evq6004c15npeh92o8fz"
        mapboxAccessToken={MAPBOX_TOKEN}
        interactiveLayerIds={['data']}
        onMouseMove={onHover}
        onMouseLeave={onLeave}
      >

        <Source  type="geojson" data={data}>
          <Layer  {...dataLayer}  />
        </Source>

        {hoverInfo && (
          <div className="tooltip" style={{left: hoverInfo.x, top: hoverInfo.y}}>
            <div>{hoverInfo.feature.properties.name}</div>
            <div>Население: {hoverInfo.feature.properties.population}</div>
          </div>
       
        )}
         <FullscreenControl position="bottom-left" />
            <NavigationControl position="bottom-left" />
            <GeocoderControl  mapboxAccessToken={MAPBOX_TOKEN} position="top-left"/>
      </Map>
      
    </div>
  );
}


export function renderToDom(container) {
  render(<App />, container);
}
