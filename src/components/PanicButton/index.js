import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hints from '../Hints';
import Timer from '../Timer';
import Panic2 from '../Panic2';
import pic from '../../Assets/dont-panic-stars.png';

function PanicButton() {
  const [version, setVersion] = useState(1);
  // document.getElementById('panicMain1').style.backgroundImage = `url(${pic})`;
  //example:
  // const answers = useRef({ id: 2 });
  //answers.current.id
  //answers.current.id = ...
  if (version === 1) {
    return (
      <main style={{ backgroundImage: `url(${pic})` }} className="panicMain1">
        <div className="panic1left">
          <Link to="/">Home</Link>
          <div id="timerP">
            <Timer version={version} setVersion={setVersion} />
          </div>
        </div>
        <div className="panic1right">
          <Hints></Hints>
          {/* <img src={pic} alt="Don't Panic"></img> */}
        </div>
      </main>
    );
  } else if (version === 2) {
    return (
      <>
        <Link to="/">Home</Link>
        <div>
          <Panic2></Panic2>
          Version 2: <Timer setVersion={setVersion} />
        </div>
      </>
    );
  } else {
    return <div>version 3</div>;
  }
}
export default PanicButton;
