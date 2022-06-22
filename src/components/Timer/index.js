import { useState, useEffect, useRef } from "react";

function Timer(props) {
  const [counter, setCounter] = useState(4);
  const [btn, setbtn] = useState(false);
  const transitionBtn = useRef(false);
  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    } else {
      //transition time
      // props.setVersion(2);
      transitionBtn.current = true;
      setbtn(true);
    }
  }, [counter]);

  return (
    <div className="App">
      <div>
        Countdown: {Math.floor(counter / 60)}:{" "}
        {counter - Math.floor(counter / 60) * 60}
      </div>
      {btn && <button>Lets move</button>}
    </div>
  );
}

export default Timer;
