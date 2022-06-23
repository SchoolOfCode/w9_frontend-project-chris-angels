import React from 'react'

function handleSubmit(event) {
  let topic = event.target.value
  console.log(topic)
}

function Panic2() {
  return (
    <main>
      <form className="problemForm" >
      <div>
          <input className='problemTopic' placeholder="What topic are you working on?"></input>
      </div>
      <div>
          <input className="problemProblem" placeholder="What is the problem?"></input>
      </div>
      <div>
        <input className="problemTried" placeholder="What have you tried so far?"></input>
        </div>
        <button type="button" onSubmit={(event) => handleSubmit(event)}></button>
      </form>
    

    <ol>
        <li><a href={`http://www.google.com/`} target="_blank">Google</a></li>
        <li><a href={`http://www.google.com/`} target="_blank">freeCodeCamp</a></li>
        <li><a href={`http://www.google.com/`} target="_blank">Google</a></li>
        <li><a href={`http://www.google.com/`} target="_blank">Google</a></li>
        <li><a href={`http://www.google.com/`} target="_blank">Google</a></li>
        <li><a href={`http://www.google.com/`} target="_blank">Google</a></li>
      </ol>
    </main>
  )
}

export default Panic2