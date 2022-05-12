import * as React from 'react';
import { render } from 'react-dom';
import Universities from './Components/maps/Universities/Universities'
import  {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Main from './Components/MainPage/MainPage'
import MapUniversities from './Components/maps/Universities/MapUniversities'
import MapLakes from './Components/maps/Lakes/Lakes'
import MapRegionsPopulation from './Components/maps/Regions/Regions'
import MapSputnik from './Components/maps/Satellite/MapSputnik'
import DistrictPopulation from './Components/maps/District/Districts'
import Dostoprimechatelnosti from './Components/maps/Dostoprimechatelnosti/MapDostoprimechatelnosti'


  
export default function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="sputnik" element={<MapSputnik />} />
            <Route path="dost" element={<Dostoprimechatelnosti />} /> 
            <Route path="universities" element={<MapUniversities />} />  
            <Route path="lakes" element={<MapLakes />} />  
            <Route path="regions" element={<MapRegionsPopulation />} />  
            <Route path="districts" element={<DistrictPopulation />} />  
          </Routes>
        </div>
      </BrowserRouter>
  )
}

export function renderToDom(container) {
  render(<App />, container);
}

