// import Profile from '../Profile/index.js';

//This will need a useEffect to fetch the API about the right type of data

import ResourceCard from '../ResourceCard';
function Resources({ list }) {
  console.log(list);
  return (
    <ol className='resourcesContainer'>
    <div className="rectangleHeader">Resources</div>
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
