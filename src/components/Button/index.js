import React from 'react';

function Button({ onClick, src }) {
  return (
    <div className="Panic">
      <img
        title="Panic Button"
        alt="Panic Button"
        onClick={onClick}
        src={src}
      ></img>
    </div>
  );
}

export default Button;
