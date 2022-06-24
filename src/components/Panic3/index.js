// get the problem variables from the previous pa

import React, { useState, useEffect } from 'react';
import pic from '../../Assets/dont-panic-stars.png';

function Panic3({ state }) {
  const [helpers, setHelpers] = useState([{ slackusername: '' }]);
  //this is for lewis
  useEffect(() => {
    async function fetchHelpers() {
      let response = await fetch(
        `http://localhost:3001/help?topic=${state.topic}`
      );
      let json = await response.json();
      let dataArr = json.data;
      console.log(dataArr);
      setHelpers([dataArr]);
    }
    fetchHelpers();
  }, []);
  console.log(helpers.slackusername);
  return (
    <main
      style={{
        color: 'white',
        backgroundImage: `url(${pic})`,
        backgroundSize: 'cover',
      }}
      className="main-panic3"
    >
      <div className="problem-request">
        <p>{`Hello I've been working on ${state.topic}`}</p>
        <p>{`The problem is ${state.problem}`}</p>
        <p>{`I've tried ${state.tried}`}</p>
      </div>

      <div className="problem-helpers">
        <p>{helpers.slackusername}</p>
      </div>
    </main>
  );
}

export default Panic3;
