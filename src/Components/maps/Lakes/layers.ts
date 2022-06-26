import type { LayerProps } from 'react-map-gl';

export const clusterLayer: LayerProps = {
  id: 'clusters',
  type: 'circle',
  source: 'Lakes',
  filter: ['has', 'point_count'],
  paint: {
    'circle-color': ['step', ['get', 'point_count'], '#87CEFA', 10, '#00BFFF', 30, '#1E90FF'],
    'circle-radius': ['step', ['get', 'point_count'], 15, 50, 20, 60, 10],
    'circle-stroke-color': '#696969',
    'circle-stroke-width': 2,

  }
};
export const clusterCountLayer: LayerProps = {
  id: 'cluster-count',
  type: 'symbol',
  source: 'Lakes',
  filter: ['has', 'point_count'],
  layout: {
    'text-size': 16,
    'text-field': '{point_count_abbreviated}',
    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold',],
  },
  "paint": {
    'text-color': "#000000"
  }
};
export const unclusteredPointLayer: LayerProps = {
  id: 'unclustered-point',
  type: 'circle',
  source: 'Lakes',
  filter: ['!', ['has', 'point_count']],
  paint: {
    'circle-color': '#fff',
    'circle-radius': 5,
    'circle-stroke-width': 2,
    'circle-stroke-color': '#000000'
  }
};







