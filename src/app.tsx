import * as React from 'react';
import { render } from 'react-dom';
import Universities from './Components/maps/Universities'
import  {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Main from './Components/MainPage/MainPage'
import {  } from "react-router-dom";

  
export default function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="universities" element={<Universities />} />  
          </Routes>
        </div>
      </BrowserRouter>
  )
}

export function renderToDom(container) {
  render(<App />, container);
}

