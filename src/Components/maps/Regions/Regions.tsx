import  React, {useState, useEffect, useMemo, useCallback} from 'react';
import {render} from 'react-dom';
import  Map, { GeolocateControl, FullscreenControl, NavigationControl,Source, Layer } from 'react-map-gl';
import {dataLayer} from './map-style';
import {updatePercentiles} from './utils';
import './regions.css'
import Nav from '../../navbar/NavBar';
import GeocoderControl from '../../Search/Geo';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2Ftb3RhIiwiYSI6ImNrdGo3dnlrZTBpYzMycnFycXNxbHk4cnIifQ.iPh1u1wmQJodbRkjJKgreQ'; // Set your mapbox token here

export default function App() {
  const [year, setYear] = useState(2015);
  const [allData, setAllData] = useState(null);
  const [hoverInfo, setHoverInfo] = useState(null);

  useEffect(() => {

    fetch(
      'https://raw.githubusercontent.com/Samotaa/geojson/master/Regions_Population_Area'
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
        mapStyle="mapbox://styles/samota/cl2xf2cx5001w14qcmubdt3kw"
        mapboxAccessToken={MAPBOX_TOKEN}
        interactiveLayerIds={['data']}
        onClick={onHover}
        // onMouseLeave={onLeave}
      >

        <Source  type="geojson" data={data}>
          <Layer  {...dataLayer}  />
        </Source>
        {/* style={{left: hoverInfo.x, top: hoverInfo.y}} */}
        {hoverInfo && (
          <div className="tooltip" >
            <div className="city"><b>{hoverInfo.feature.properties.name}</b></div>
            <div>Численность населения: {hoverInfo.feature.properties.population}</div>
            <div>Городское: {hoverInfo.feature.properties.urban}</div>
            <div>Сельское: {hoverInfo.feature.properties.selskoe}</div>
            <div>Моложе трудоспособного: {hoverInfo.feature.properties.molojeTrud}</div>
            <div>Трудоспособное: {hoverInfo.feature.properties.trud}</div>
            <div>Старше трудоспособного : {hoverInfo.feature.properties.older}</div>
            <div>Районов: {hoverInfo.feature.properties.rajon}</div>
            <div>Городов: {hoverInfo.feature.properties.cities}</div>
            <div>Посёлков городского типа: {hoverInfo.feature.properties.poselkiGorType}</div>
            <div>Деревень: {hoverInfo.feature.properties.villages}</div>
            <div>Площадь: {hoverInfo.feature.properties.area}тыс км<sup>2</sup></div>
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
