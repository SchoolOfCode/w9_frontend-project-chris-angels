import React from 'react'

function handleSubmit() {
  let topic = document.querySelector('problemTopic').event.target.value
  console.log(topic)
}

function Panic2() {
  return (
    <main1>
      <form className="problemForm" onSubmit={() => handleSubmit()}>
      <div>
          <input className='problemTopic' placeholder="What topic are you working on?"></input>
      </div>
      <div>
          <input className="problemProblem" placeholder="What is the problem?"></input>
      </div>
      <div>
        <input className="problemTried" placeholder="What have you tried so far?"></input>
        </div>
      </form>
    

    <ol>
        <li>Google</li>
        <li>w3schools</li>
        <li>Docs</li>
        <li>FreecodeCamp</li>
      </ol>
    </main1>
  )
}

export default Panic2