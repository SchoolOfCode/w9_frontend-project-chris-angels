import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function handleSubmit(e) {
  e.preventDefault();
  let topic = e.target.problemTopic.value;
  let problem = e.target.problemProblem.value;
  let tried = e.target.problemTried.value;
  console.log(topic, problem, tried);
}

function Panic2() {
  return (
    <main className="main-panic2" >
      <form
        className="problemForm"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <TextField
            sx={{ backgroundColor: "white", minWidth: "20rem" }}
            id="problemTopic"
            type="text"
            placeholder="What topic are you working on?"
          ></TextField>
        </div>
        <div>
          <TextField
            sx={{ backgroundColor: "white", minWidth: "20rem" }}
            id="problemProblem"
            type="text"
            placeholder="What is the problem?"
          ></TextField>
        </div>
        <div>
          <TextField
            sx={{ backgroundColor: "white", minWidth: "20rem" }}
            id="problemTried"
            type="text"
            placeholder="What have you tried so far?"
          ></TextField>
        </div>
        <Button variant="contained">Placeholder</Button>
      </form>

      <ol>
        <li>
          <a rel="noreferrer" href={`http://www.google.com/`} target="_blank">
            Google
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            href={`http://www.freecodecamp.org/`}
            target="_blank"
          >
            freeCodeCamp
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            href={`https://www.w3schools.com/`}
            target="_blank"
          >
            w3Schools
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            href={`https://stackoverflow.com/`}
            target="_blank"
          >
            Stack Overflow
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            href={`https://developer.mozilla.org/en-US/`}
            target="_blank"
          >
            MDN docs
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            href={`https://beta.reactjs.org/`}
            target="_blank"
          >
            Beta React
          </a>
        </li>
      </ol>
    </main>
  );
}

export default Panic2;
