import React from 'react';

function Error(props) {
  return (
    <div className="error">
      <p>{props.error}</p>
    </div>
  )
}

export default Error;