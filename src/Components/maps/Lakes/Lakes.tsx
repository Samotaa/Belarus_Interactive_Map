import * as React from 'react';
import { useRef, useState, useCallback } from 'react';
import { render } from 'react-dom';
import { Map, Source, Layer, Marker,FullscreenControl, NavigationControl } from 'react-map-gl';

import ControlPanel from './control-panel';
import { clusterLayer, clusterCountLayer, unclusteredPointLayer } from './layers';
import GeocoderControl from '../../Search/Geo';
import Nav from '../../navbar/NavBar'

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2Ftb3RhIiwiYSI6ImNrdGo3dnlrZTBpYzMycnFycXNxbHk4cnIifQ.iPh1u1wmQJodbRkjJKgreQ'; // Set your mapbox token here

export default function App() {

  const mapRef = React.useRef();

  const onSelectLake = useCallback(({ longitude, latitude }) => {
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
    <Nav />
      <Map
        initialViewState={{
          latitude: 54,
          longitude: 28,
          zoom: 6.1,
          minZoom: 6.1
        }}
        mapStyle="mapbox://styles/samota/cl1duf7ak00j314qonxftcjh4"
        mapboxAccessToken={MAPBOX_TOKEN}
        interactiveLayerIds={[clusterLayer.id]}
        ref={mapRef}
      >

        <Source
          id="lakes"
          type="geojson"
          data="https://raw.githubusercontent.com/Samotaa/geojson/master/Lakes"
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={50}
        >

          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
        </Source>

        <FullscreenControl position="bottom-left" />
            <NavigationControl position="bottom-left" />
            <GeocoderControl  mapboxAccessToken={MAPBOX_TOKEN} position="top-left"/>
      </Map>
      <ControlPanel onSelectLake={onSelectLake} onSelectBack={onSelectBack} />
    </div>
  );
}

