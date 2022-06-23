import React from 'react'

function handleSubmit(e) {
  e.preventDefault()
 
  console.log(e.target)
}

function Panic2() {
  return (
    <main>
      <form className="problemForm" onSubmit={(e) => {
        handleSubmit(e);
        console.log("submitted")
      }} >
      <div>
          <input className='problemTopic' type="text" value="What topic are you working on?" ></input>
      </div>
      <div>
          <input className="problemProblem" type="text" value="What is the problem?" placeholder="What is the problem?"></input>
      </div>
      <div>
          <input className="problemTried" type="text" value="value" placeholder="What have you tried so far?"></input>
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