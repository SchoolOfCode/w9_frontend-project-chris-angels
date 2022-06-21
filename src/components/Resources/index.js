// import Profile from '../Profile/index.js';

//This will need a useEffect to fetch the API about the right type of data
import ResourceCard from '../ResourceCard';
import { useState, useEffect } from 'react';

function Resources({ list }) {
  // Used to get a randomised resource from database (needs adding to)
  const [resourceIndex, setResourceIndex] = useState(0);
  // Need to figure out if we can use and where to place below variable
  // let resourceID = getTopicById(Math.floor(Math.random() * 5));

  // function to fetch the data from the database
  async function Fetch() {
    let response = await fetch('localhost')
    let data = await response.json();
    let newResource = [{
      postedBy: userID,
      id: topicID,
      tags: [""],
      resourceRating: rating
    }]
  }



  console.log(list);
  return (
    <ol>
      {' '}
      {list.map((item, index) => {
        return (
          <ResourceCard
            key={index}
            logo={item.picture}
            tags={item.tags}
          ></ResourceCard>
        );
      })}
    </ol>
  );

  // ({ list.map((item, index) => { return <ResourceCard></ResourceCard> }) })
}

export default Resources;
