import Tag from '../../Assets/Tag.png'

function ResourceCard(props) {
  return (
    <div >
      <div className="resourceCard">
        <img className="resourceImage" src={props.logo} alt="resource type logo"></img>{' '}
        <div className="title">{props.link}Title</div>

      </div>
      <dl className="tags">
        {props.tags.map((tag, index) => {
          return <li key={index}>{tag}<img alt="tag" className="imageTag" src={Tag}></img></li>;
        })}
      </dl>
    </div>
  );
}

export default ResourceCard;
