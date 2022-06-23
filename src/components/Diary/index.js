import { useEffect, useState } from 'react';
import Header from '../Header';
function Diary(props) {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    async function Fetch() {
      let res = await fetch(
        `http://localhost:3001/notes?email=${props.user.email}`
      );
      let json = await res.json();
      let dataArr = json.data;
      console.log(json, dataArr);
      setNotes(dataArr);
    }
    Fetch();
  }, []);
  console.log('props', props);
  return (
    <main>
      <Header></Header>
      <section className="notescontainer">
        {notes.map((item, index) => {
          return (
            <div className="entryBox" key={index}>
              <div>
                W{item.week}D{item.day}
              </div>
              <ol className="tagList">
                {item.tags.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ol>
              {item.note}
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default Diary;
