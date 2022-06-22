// import Profile from '../Profile/index.js';

//This will need a useEffect to fetch the API about the right type of data

import ResourceCard from "../ResourceCard";
import { useState, useEffect } from "react";

function Resources({ list }) {
  // Used to get a randomised resource from database (needs adding to)

  const [data, setData] = useState([
    { resourceid: 0, userid: 0, topicid: 0, link: "", tags: [], rating: 0 },
  ]);
  //state for the topic dropdown
  const [topicChoice, setTopicChoice] = useState(0);
  //state changing to the topicChoice after being clicked
  const [confirmedTopic, setConfirmedTopic] = useState(0);
  // Need to figure out if we can use and where to place below variable
  // let resourceID = getTopicById(Math.floor(Math.random() * 5));

  useEffect(() => {
    // function to fetch the data from the database initially
    async function Fetch() {
      let response = await fetch(
        `http://localhost:3001/resource/${Math.floor(Math.random() * 2) + 1}`
      );
      let json = await response.json();
      // console.log(json);
      let dataArr = json.data;

      // console.log('hello', dataArr);
      setData([...dataArr]);
    }
    Fetch();
    // console.log(data, 'hello'); []);

    // console.log(data, 'hi hi');

    console.log("hello", dataArr);
    setData([...dataArr]);

    Fetch();
    console.log(data, "hello");
  }, []);

  //use effect that fetches a fresh batch of resources by topic when topic is selected and confirmed
  useEffect(() => {
    // function to fetch the data from the database
    async function Fetch() {
      let response = await fetch(
        `http://localhost:3001/resource/${confirmedTopic}`
      );
      let json = await response.json();
      // console.log(json);
      let dataArr = json.data;

      console.log("hello", dataArr);
      setData([...dataArr]);
    }
    Fetch();
    console.log(confirmedTopic, "hello");
  }, [confirmedTopic]);

  //___________Functions and the list of options for dropdown Container! ADD OBJECT TO THE LIST TO ADD A NEW OPTION, DON'T MODIFY THE JSX____________

  //function changing the state
  function topicChangeHandler(event) {
    setTopicChoice(event.target.value);
  }

  //list of topic options
  const topicOptions = [
    { label: "HTML", value: 1 },
    { label: "CSS", value: 2 },
    { label: "JAVASCRIPT", value: 3 },
    { label: "EXPRESS", value: 4 },
  ];

  //___________Function serving the search button for topics__________
  function searchButtonHandler() {
    setConfirmedTopic(topicChoice);
  }

  console.log(data, "hi hi");

  return (
    <dl className="resourcesContainer">
      {/*create a form for input box of topics (dropdown) and a submit (search) button. DIV CONTAINER FOR CSS PURPOSES*/}
      <div id="dropdown-menu-cont">
        <label>
          Topic:
          <select value={topicChoice} onChange={topicChangeHandler}>
            {topicOptions.map((item, index) => {
              return (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
          <button id="topic-filter-butt" onClick={searchButtonHandler}>
            Search
          </button>
        </label>
      </div>
      <div className="rectangleHeader">Resources</div>{" "}
      {data.map((item, index) => {
        return (
          <ResourceCard
            key={index}
            logo={item.picture}
            userid={item.userid}
            topicid={item.topicid}
            link={item.link}
            tags={item.tags}
            rating={item.rating}
          ></ResourceCard>
        );
      })}
      {/*(console.log(topicChoice), console.log(confirmedTopic))*/}
    </dl>
  );

  // ({ list.map((item, index) => { return <ResourceCard></ResourceCard> }) })
}

export default Resources;
