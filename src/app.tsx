import * as React from 'react';
import { render } from 'react-dom';
import Universities from './Components/maps/Universities/Universities'
import  {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Main from './Components/MainPage/MainPage'
import MapUniversities from './Components/maps/Universities/MapUniversities'
import MapLakes from './Components/maps/Lakes/Lakes'
import {  } from "react-router-dom";

  
export default function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="universities" element={<MapUniversities />} />  
            <Route path="lakes" element={<MapLakes />} />  
          </Routes>
        </div>
      </BrowserRouter>
  )
}

export function renderToDom(container) {
  render(<App />, container);
}

