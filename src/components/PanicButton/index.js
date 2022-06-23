import { useState } from 'react';
import { Link } from 'react-router-dom';
import Timer from '../Timer';

function PanicButton() {
  const [version, setVersion] = useState(1);
  if (version === 1) {
    return (
      <>
        <Link to="/">Home</Link>
        <div>
          version 1: <Timer version={version} setVersion={setVersion} />
        </div>
      </>
    );
  } else if (version === 2) {
    return (
      <>
        <Link to="/">Home</Link>
        <div>
          Version 2: <Timer version={version} setVersion={setVersion} />
        </div>
      </>
    );
  } else {
    return <div>version 3</div>;
  }
}
export default PanicButton;
