import { useEffect, useState } from 'react';
import LinearWithValueLabel from '../LinearProgress';
function ProgressBar({ email }) {
  // const progress = useRef(0);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    //fetch based on most recent note (highest week) and get corresponding day
    //This needs to be changed to be what the current user note is based on their email, just place email into the fetch
    //There are 16 weeks with 5 work days so 80 total?
    async function Fetch() {
      let res = await fetch(
        'http://localhost:3001/recent?email=g.yankovic@hotmail.com'
      );
      let json = await res.json();
      // console.log(json);
      let dataArr = json.data[0];
      console.log('ProgressBAR', dataArr);
      setProgress((dataArr.week * 5 + dataArr.day) * 1.25);
    }
    Fetch();
  }, []);
  return (
    <div>
      <div className="progressBox">
        <LinearWithValueLabel progress={progress}></LinearWithValueLabel>
      </div>
    </div>
  );
}

export default ProgressBar;
