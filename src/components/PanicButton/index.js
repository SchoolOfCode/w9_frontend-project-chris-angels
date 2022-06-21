import { useState } from 'react';
import Timer from '../Timer';

function PanicButton() {
  const [version, setVersion] = useState(1);
  if (version === 1) {
    return (
      <div>
        version 1: <Timer setVersion={setVersion} />
      </div>
    );
  } else if (version === 2) {
    return <div>version 2</div>;
  } else {
    return <div>version 3</div>;
  }
}
export default PanicButton;
