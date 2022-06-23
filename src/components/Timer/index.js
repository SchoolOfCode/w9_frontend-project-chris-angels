import { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import Box from "@mui/material/Box";

function Timer(props) {
  const [counter, setCounter] = useState(15);
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
  function configureTimer(counter) {
    let min = Math.floor(counter / 60);
    let sec = counter - Math.floor(counter / 60) * 60;
    if (min < 10) {
      min = "0" + String(min);
    } else {
      min = String(min);
    }
    if (sec < 10) {
      sec = "0" + String(sec);
    } else {
      sec = String(sec);
    }
    return min + ":" + sec;
  }
  return (
    <div className="App">
      <div>Countdown: {configureTimer(counter)}</div>
      {btn && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DirectionsRunIcon fontSize="large"></DirectionsRunIcon>
          <Button
            variant="contained"
            onClick={() => {
              props.setVersion(props.version + 1);
            }}
          >
            Lets move
          </Button>
        </Box>
      )}
    </div>
  );
}

export default Timer;
