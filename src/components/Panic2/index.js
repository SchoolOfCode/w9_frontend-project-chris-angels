import React from 'react'

function handleSubmit(e) {
  e.preventDefault()
  let topic = e.target.problemTopic.value
  let problem = e.target.problemProblem.value
  let tried = e.target.problemTried.value
  console.log(topic, problem, tried)
}

function Panic2() {
  return (
    <main>
      <form className="problemForm" onSubmit={(e) => {
        handleSubmit(e);
      }} >
      <div>
          <input id='problemTopic' type="text" placeholder="What topic are you working on?"></input>
      </div>
      <div>
          <input id="problemProblem" type="text" placeholder="What is the problem?"></input>
      </div>
      <div>
          <input id="problemTried" type="text" placeholder="What have you tried so far?"></input>
        </div>
        <button ></button>
      </form>
    
    <ol>
        <li><a rel="noreferrer" href={`http://www.google.com/`} target="_blank">Google</a></li>
        <li><a rel="noreferrer" href={`http://www.freecodecamp.org/`} target="_blank">freeCodeCamp</a></li>
        <li><a rel="noreferrer" href={`https://www.w3schools.com/`} target="_blank">w3Schools</a></li>
        <li><a rel="noreferrer" href={`https://stackoverflow.com/`} target="_blank">Stack Overflow</a></li>
        <li><a rel="noreferrer" href={`https://developer.mozilla.org/en-US/`} target="_blank">MDN docs</a></li>
        <li><a rel="noreferrer" href={`https://beta.reactjs.org/`} target="_blank">Beta React</a></li>
      </ol>
    </main>
  )
}

export default Panic2