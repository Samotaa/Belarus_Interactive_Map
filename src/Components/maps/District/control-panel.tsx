import * as React from 'react';

function ControlPanel(props) {
  const {year} = props;

  return (
    <div className="control-panel">
      <h3>Население районов</h3>
    </div>
  );
}

export default React.memo(ControlPanel);
