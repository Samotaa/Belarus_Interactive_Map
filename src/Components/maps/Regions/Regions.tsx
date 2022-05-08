import  React, {useState, useEffect, useMemo, useCallback} from 'react';
import {render} from 'react-dom';
import ControlPanel from './control-panel';
import  Map, { GeolocateControl, FullscreenControl, NavigationControl,Source, Layer } from 'react-map-gl';
import {dataLayer} from './map-style';
import {updatePercentiles} from './utils';
import './regions.css'
import Nav from '../../navbar/NavBar';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2Ftb3RhIiwiYSI6ImNrdGo3dnlrZTBpYzMycnFycXNxbHk4cnIifQ.iPh1u1wmQJodbRkjJKgreQ'; // Set your mapbox token here

export default function App() {
  const [year, setYear] = useState(2015);
  const [allData, setAllData] = useState(null);
  const [hoverInfo, setHoverInfo] = useState(null);

  useEffect(() => {

    fetch(
      'https://raw.githubusercontent.com/Samotaa/geojson/master/regions'
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
          zoom: 6.2,
          minZoom: 6.2
        }}
        mapStyle="mapbox://styles/samota/cl2xf2cx5001w14qcmubdt3kw"
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
            <div>Население: {hoverInfo.feature.properties.value}</div>
          </div>
       
        )}
         <FullscreenControl position="bottom-left" />
            <NavigationControl position="bottom-left" />
            <ControlPanel year={year} onChange={value => setYear(value)} />
      </Map>
             
    </div>
  );
}

export function renderToDom(container) {
  render(<App />, container);
}