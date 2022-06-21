import react from "react";

export function NotesInputField(props) {
  return (
    <form id="notes-input-field">
      <div id="week-field">
        <label for="week-input">Week:</label>
        <input id="week-input"></input>
      </div>
      <div id="day-field">
        <label for="day-input">Day:</label>
        <input id="day-input"></input>
      </div>
      <div id="topic-field">
        <label for="topic-input">Topic:</label>
        <input id="topic-input"></input>
      </div>
      <div id="tags-field">
        <h3>Tags</h3>
        <label for="video-tag">Video</label>
        <input type="radio" id="video-tag"></input>
        <label for="image-tag">Video</label>
        <input type="radio" id="image-tag"></input>
        <label for="article-tag">Video</label>
        <input type="radio" id="article-tag"></input>
        <label for="tag1-tag">Tag1</label>
        <input type="radio" id="tag1-tag"></input>
        <label for="tag2-tag">Tag2</label>
        <input type="radio" id="tag2-tag"></input>
        <label for="tag3-tag">Tag3</label>
        <input type="radio" id="tag3-tag"></input>
      </div>
      <div id="resources-field">
        <label for="resources-input">External resources:</label>
        <input id="resources-input"></input>
      </div>
      <div id="happy-to-help-field">
        <label for="happy-to-help-input">
          Are you happy to be asked for help on this topic?
        </label>
        <input id="happy-to-help-input"></input>
      </div>
    </form>
  );
}
