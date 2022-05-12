import React, { useState, useRef } from 'react';
import UNIVERSITIES from './cities.json'
import './dostoprimechatelnosti.css'
function ControlPanel(props) {


  const [activeUn, setActiveUn] = useState(UNIVERSITIES)

  const [value, setValue] = useState('')

 

  const filteredUniversities = activeUn.filter(university => {
    return university.name.toLowerCase().includes(value.toLowerCase())
  })


  return (
    <div className="control-panel">
      <p className="control-panel-title">Достропримечательности:</p>

     

      {filteredUniversities.map((university, index) => (
        <div key={`btn-${index}`} className="input">

          <input
          className="option-input radio" 
          
            type="radio"
            name="university"
            id={`university-${index}`}
            onClick={() => props.onSelectUniversity(university)}
          />
          
          <label htmlFor={`university-${index}`}>{university.name} </label>
        </div>

      ))}
      <label>
        <input
         className="option-input radio" 
          type="radio"
          name="university"
          id={'back'}
          defaultChecked={true}
          onClick={() => props.onSelectBack()}
        />Отдалить
      </label>

    </div>
  );
}

export default ControlPanel;
