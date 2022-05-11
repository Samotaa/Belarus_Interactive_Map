import type {FillLayer} from 'react-map-gl';


export const dataLayer: FillLayer = {
  id: 'data',
  type: 'fill',
  paint: {
    'fill-color': {
      property: 'population',
      stops: [
        [0, '#FBCEB1'],
        [1, '#F19CBB'],
        [2, '#FDD9B5'],
        [3, '#F9BB0B'],
        [4, '#3288bd'],
        [5, '#e6f598'],
        
      ]
    },
    'fill-opacity': 0
  }
};
