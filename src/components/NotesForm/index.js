export default function NotesForm(props) {
  function handleSubmission(e) {
    e.preventDefault();
    console.log('form submission', e.target);
    document.querySelector('.modalcontainer2').classList.add('hidden');
    //TODO::::::parse e.target htmlFor the values I want, put them in an obj, send in a post fetch to the server

    //Resets form
    document.querySelector('#notes-input-field').reset();
  }
  function hideForm() {
    document.querySelector('.modalcontainer2').classList.add('hidden');
  }
  return (
    <div className="modalcontainer2 hidden">
      <div className="formContainer">
        <button onClick={hideForm}>X</button>
        <form
          id="notes-input-field"
          onSubmit={(e) => {
            handleSubmission(e);
          }}
        >
          <div id="week-field">
            <label htmlFor="week-input">Week:</label>
            <input id="week-input"></input>
          </div>
          <div id="day-field">
            <label htmlFor="day-input">Day:</label>
            <input id="day-input"></input>
          </div>
          <div id="topic-field">
            <label htmlFor="topic-input">Topic:</label>
            <select name="topic" id="topic">
              <option value="React">React</option>
              <option value="Express">Express</option>
              <option value="Express">SQL</option>
              <option value="Express">CSS</option>
              <option value="Express">Javascript</option>
              <option value="Express">Hackathon</option>
            </select>
          </div>
          <div id="tags-field">
            <h3>Tags</h3>
            <input type="checkbox" id="video-tag"></input>
            <label htmlFor="video-tag">Video</label>
            <input type="checkbox" id="image-tag"></input>
            <label htmlFor="article-tag">Article</label>
            <input type="checkbox" id="article-tag"></input>
            <label htmlFor="image-tag">Image</label>
            <input type="checkbox" id="tag1-tag"></input>
            <label htmlFor="tag1-tag">HTML</label>
            <input type="checkbox" id="tag2-tag"></input>
            <label htmlFor="tag2-tag">CSS</label>
            <input type="checkbox" id="tag3-tag"></input>
            <label htmlFor="tag3-tag">Javascript</label>
          </div>
          <div id="resources-field">
            <label htmlFor="resources-input">External resources:</label>
            <input id="resources-input"></input>
          </div>
          <div id="happy-to-help-field">
            <label htmlFor="happy-to-help-input">
              Are you happy to be asked htmlFor help on this topic?
            </label>
            <input id="happy-to-help-input"></input>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
