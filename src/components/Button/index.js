import React from 'react';

function Button({ onClick, src }) {
  return (
    <div className="Panic" aria-label="Button to trigger help timer">
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
