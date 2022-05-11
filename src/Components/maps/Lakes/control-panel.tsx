import * as React from 'react';
import LAKES from './lakes.json';
import './lakes.css'
function ControlPanel(props) {
  return (
    <div className="control-panel">

      <p className="control-panel-title">Cамое глубокое и самое большое озёра:</p>
      {LAKES.filter(lake => lake.type === 'Lakes').map((lake, index) => (
        <div key={`btn-${index}`} className="input">

          <input
           className="option-input radio" 
            type="radio"
            name="lake"
            id={`lake-${index}`}
            onClick={() => props.onSelectLake(lake)}
          />

          <label className="descLake" htmlFor={`lake-${index}`}>{lake.lake} {lake.description}</label>
        </div>

      ))}
      <label className="descLake">
        <input
         className="option-input radio" 
          type="radio"
          name="lake"
          id={'back'}
          defaultChecked={true}
          onClick={() => props.onSelectBack()}
        />Отдалить
      </label>

    </div>
  );
}

export default ControlPanel;
