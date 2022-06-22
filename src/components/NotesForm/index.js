export default function NotesForm(props) {
  console.log('notes', props);
  async function handleSubmission(e) {
    e.preventDefault();
    console.log('form submission', e.target.elements);
    document.querySelector('.modalcontainer2').classList.add('hidden');
    console.log(document.getElementById('article-tag').checked);
    console.log(document.getElementById('article-tag').name);
    console.log(document.getElementById('video-tag').checked);
    let postObj = {
      tags: [],
      week: document.getElementById('week-input').value,
      day: document.getElementById('day-input').value,
      note: document.getElementById('noteArea').value,
    };
    if (document.getElementById('video-tag').checked) {
      postObj.tags = [
        ...postObj.tags,
        document.getElementById('video-tag').name,
      ];
    }
    if (document.getElementById('article-tag').checked) {
      postObj.tags = [
        ...postObj.tags,
        document.getElementById('article-tag').name,
      ];
    }
    if (document.getElementById('image-tag').checked) {
      postObj.tags = [
        ...postObj.tags,
        document.getElementById('image-tag').name,
      ];
    }
    if (document.getElementById('html-tag').checked) {
      postObj.tags = [
        ...postObj.tags,
        document.getElementById('html-tag').name,
      ];
    }
    if (document.getElementById('css-tag').checked) {
      postObj.tags = [...postObj.tags, document.getElementById('css-tag').name];
    }
    if (document.getElementById('js-tag').checked) {
      postObj.tags = [...postObj.tags, document.getElementById('js-tag').name];
    }

    let res = await fetch(`http://localhost:3001/notes?email=${props.email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postObj),
    });
    // user.current = json.data[0];
    // setPlaceHolder(json.data[0].slackusername);
    // console.log('ayo', user);
    //Resets form
    document.querySelector('#notes-input-field').reset();
    window.location.reload();
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
            <input
              type="number"
              id="week-input"
              min={1}
              max={16}
              step={1}
              required
            ></input>
          </div>
          <div id="day-field">
            <label htmlFor="day-input">Day:</label>
            <input
              id="day-input"
              type="number"
              min={1}
              max={5}
              step={1}
              required
            ></input>
          </div>
          <div id="topic-field">
            <label htmlFor="topic-input">Topic:</label>
            <select name="topic" id="topic">
              <option value="React">React</option>
              <option value="Express">Express</option>
              <option value="SQL">SQL</option>
              <option value="CSS">CSS</option>
              <option value="JS">Javascript</option>
              <option value="Hackathon">Hackathon</option>
            </select>
          </div>
          <div id="tags-field">
            <h3>Tags</h3>
            <input type="checkbox" id="video-tag" name="video"></input>
            <label htmlFor="video-tag">Video</label>
            <input type="checkbox" id="article-tag" name="article"></input>
            <label htmlFor="article-tag">Article</label>
            <input type="checkbox" id="image-tag" name="image"></input>
            <label htmlFor="image-tag">Image</label>
            <input type="checkbox" id="html-tag" name="html"></input>
            <label htmlFor="tag1-tag">HTML</label>
            <input type="checkbox" id="css-tag" name="css"></input>
            <label htmlFor="tag2-tag">CSS</label>
            <input type="checkbox" id="js-tag" name="javascript"></input>
            <label htmlFor="tag3-tag">Javascript</label>
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
          <div id="happy-to-help-field">
            <label htmlFor="happy-to-help-input">
              Are you happy to be asked for help on this topic?
            </label>
            <input type="checkbox" id="happy-to-help-input"></input>
            <label htmlFor="notes">
              <textarea id="noteArea" required rows={10} cols={50}></textarea>
            </label>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
