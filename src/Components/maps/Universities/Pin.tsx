import * as React from 'react';

const pinStyle = {
  cursor: 'pointer',
  fill: '#d00',
  stroke: 'none'
};

function Pin({ size = 20, onClick }: {
  size?: number;
  onClick?: () => void
}) {

  return (
    <img style={pinStyle} onClick={onClick} src="placeholder.png"
      width="40" height="40" alt="lorem"></img>

  );
}

export default React.memo(Pin);