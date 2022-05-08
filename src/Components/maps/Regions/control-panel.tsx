import * as React from 'react';

function ControlPanel(props) {
  const {year} = props;

  return (
    <div className="control-panel">
      <h3>Население областей</h3>
      <p>
       Население в <b>{year}</b> году
      </p>


      <div key={'year'} className="input">
        <label>Год</label>
        <input
          type="range"
          value={year}
          min={2015}
          max={2020}
          step={1}
          onChange={evt => props.onChange(evt.target.value)}
        />
      </div>
    </div>
  );
}

export default React.memo(ControlPanel);
