function ResourceCard(props) {
  return (
    <div>
      <div>
        <img src={props.logo} alt="resource type logo"></img>{' '}
        <div>{props.title}</div>
      </div>
      <ol>
        {props.tags.map((tag, index) => {
          return <li key={index}> #{tag}</li>;
        })}
      </ol>
    </div>
  );
}

export default ResourceCard;
