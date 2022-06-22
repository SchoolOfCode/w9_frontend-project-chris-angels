// import Profile from '../Profile/index.js';

//This will need a useEffect to fetch the API about the right type of data

import ResourceCard from '../ResourceCard';
import { useState, useEffect } from 'react';

function Resources({ list }) {
  // Used to get a randomised resource from database (needs adding to)

  const [data, setData] = useState([{ resourceid: 0, userid: 0, topicid: 0, link: "", tags: [], rating: 0 }]);
  // Need to figure out if we can use and where to place below variable
  // let resourceID = getTopicById(Math.floor(Math.random() * 5));
  useEffect(() => {
    // function to fetch the data from the database
    async function Fetch() {
      let response = await fetch(
        `http://localhost:3003/resource/${Math.floor(Math.random() * 2) + 1}`
      );
      let json = await response.json();
      console.log(json);
      let dataArr = json.data;
      console.log('hello', dataArr);
      setData([...dataArr])
      
    }
    Fetch();
    console.log(data, "hello")
  }, []);

console.log(data, "hi hi")
  return (
    <dl className='resourcesContainer'>
    <div className="rectangleHeader">Resources</div>
      {' '}
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
    </dl>
  );

  // ({ list.map((item, index) => { return <ResourceCard></ResourceCard> }) })
}

export default Resources;
