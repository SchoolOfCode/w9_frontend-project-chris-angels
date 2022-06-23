/**
 *
 * @param {*} Props: email of the current user.
 * @returns
 */
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";

export default function NotesForm(props) {
  //Form submission function that reads each input type and adds it to the object to be sent to the server if needed.
  //state keeping track of topic dropdown values
  const [topicValue, setTopicValue] = useState(0);

  //function changing topicValue when dropdown value changes
  function handleDropdownChange(e) {
    setTopicValue(e.target.value);
  }

  async function handleSubmission(e) {
    e.preventDefault();
    console.log(document.getElementById("topic").value);
    document.querySelector(".modalcontainer2").classList.add("hidden");
    let postObj = {
      tags: [],
      week: document.getElementById("week-input").value,
      day: document.getElementById("day-input").value,
      note: document.getElementById("noteArea").value,
    };

    let newResourceObj = {
      topicID: topicValue,
      tags: [],
      link: document.getElementById("resources-input").value,
      rating: 3,
    };

    if (document.getElementById("video-tag").checked) {
      postObj.tags = [
        ...postObj.tags,
        document.getElementById("video-tag").name,
      ];
      newResourceObj.tags = [
        ...newResourceObj.tags,
        document.getElementById("video-tag").name,
      ];
    }
    if (document.getElementById("article-tag").checked) {
      postObj.tags = [
        ...postObj.tags,
        document.getElementById("article-tag").name,
      ];
      newResourceObj.tags = [
        ...newResourceObj.tags,
        document.getElementById("article-tag").name,
      ];
    }
    if (document.getElementById("image-tag").checked) {
      postObj.tags = [
        ...postObj.tags,
        document.getElementById("image-tag").name,
      ];
      newResourceObj.tags = [
        ...newResourceObj.tags,
        document.getElementById("image-tag").name,
      ];
    }
    if (document.getElementById("html-tag").checked) {
      postObj.tags = [
        ...postObj.tags,
        document.getElementById("html-tag").name,
      ];
      newResourceObj.tags = [
        ...newResourceObj.tags,
        document.getElementById("html-tag").name,
      ];
    }
    if (document.getElementById("css-tag").checked) {
      postObj.tags = [...postObj.tags, document.getElementById("css-tag").name];
      newResourceObj.tags = [
        ...newResourceObj.tags,
        document.getElementById("css-tag").name,
      ];
    }
    if (document.getElementById("js-tag").checked) {
      postObj.tags = [...postObj.tags, document.getElementById("js-tag").name];
      newResourceObj.tags = [
        ...newResourceObj.tags,
        document.getElementById("js-tag").name,
      ];
    }

    //All elements have been searched, ready to post the data to the server and database.
    await fetch(`http://localhost:3001/notes?email=${props.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postObj),
    });

    if (document.getElementById("resources-input").value !== "") {
      await fetch(`http://localhost:3001/resource`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newResourceObj),
      });
    }
    //Resets form and then reloads page
    document.querySelector("#notes-input-field").reset();
    window.location.reload();
  }
  function hideForm() {
    document.querySelector(".modalcontainer2").classList.add("hidden");
  }

  //__________________________________________________JSX_______________________________________________
  return (
    <div className="modalcontainer2 hidden">
      <section className="formContainer">
        <button
          aria-label="Cancel and hide current notes submission form"
          onClick={hideForm}
        >
          X
        </button>
        <form
          id="notes-input-field"
          onSubmit={(e) => {
            handleSubmission(e);
          }}
        >
          <div id="left-col-NoteForm">
            <div id="week-field">
              <TextField
                label="Week:"
                variant="outlined"
                size="small"
                sx={{ width: "15%" }}
                type="number"
                id="week-input"
                min={1}
                max={16}
                step={1}
                required
              ></TextField>
            </div>
            <div id="day-field">
              <TextField
                label="Day:"
                variant="outlined"
                size="small"
                sx={{ width: "15%" }}
                id="day-input"
                type="number"
                min={1}
                max={5}
                step={1}
                required
              ></TextField>
            </div>
            <div id="topic-field">
              <InputLabel htmlFor="topic-input">Topic:</InputLabel>
              <Select
                id="topic"
                sx={{ width: 150 }}
                onChange={handleDropdownChange}
                value={topicValue}
              >
                <MenuItem value={1}>HTML</MenuItem>
                <MenuItem value={4}>Express</MenuItem>
                <MenuItem value={5}>SQL</MenuItem>
                <MenuItem value={2}>CSS</MenuItem>
                <MenuItem value={3}>Javascript</MenuItem>
                <MenuItem value={6}>Hackathon</MenuItem>
              </Select>
            </div>
            <div id="tags-field">
              <InputLabel htmlFor="topic-input">Tags:</InputLabel>
              <div className="topic-tag-row">
                <div className="topic-unit">
                  <input type="checkbox" id="video-tag" name="video"></input>
                  <label htmlFor="video-tag" class="check-label">
                    Video
                  </label>
                </div>
                <div className="topic-unit">
                  <input
                    type="checkbox"
                    id="article-tag"
                    name="article"
                  ></input>
                  <label htmlFor="article-tag" class="check-label">
                    Article
                  </label>
                </div>
                <div className="topic-unit">
                  <input type="checkbox" id="image-tag" name="image"></input>
                  <label htmlFor="image-tag" class="check-label">
                    Image
                  </label>
                </div>
              </div>
              <div className="topic-tag-row">
                <div className="topic-unit">
                  <input type="checkbox" id="html-tag" name="html"></input>
                  <label htmlFor="tag1-tag" class="check-label">
                    HTML
                  </label>
                </div>
                <div className="topic-unit">
                  <input type="checkbox" id="css-tag" name="css"></input>
                  <label htmlFor="tag2-tag" class="check-label">
                    CSS
                  </label>
                </div>
                <div className="topic-unit">
                  <input type="checkbox" id="js-tag" name="javascript"></input>
                  <label htmlFor="tag3-tag" class="check-label">
                    Javascript
                  </label>
                </div>
              </div>
            </div>
            <div id="resources-field">
              <label htmlFor="resources-input">External resource URL:</label>
              <input
                type="url"
                placeholder="https://example.com"
                pattern="https://.*"
                id="resources-input"
              ></input>
            </div>
          </div>
          <div id="right-col-NotesForm">
            <label htmlFor="notes">
              <textarea id="noteArea" required rows={10} cols={50}></textarea>
            </label>
            <div id="happy-to-help-field">
              <label htmlFor="happy-to-help-input">
                Are you happy to be asked for help on this topic?
              </label>
              <input type="checkbox" id="happy-to-help-input"></input>
            </div>
            <button>Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
}
