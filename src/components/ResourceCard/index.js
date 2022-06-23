import Tag from '../../Assets/Tag.png';
import video from '../../Assets/video.png';
import image from '../../Assets/image.png';
import notes from '../../Assets/notes.png';

let images;

function ResourceCard(props) {
  if (props.tags.includes('video')) {
    console.log('jimmy');
    images = video;
  } else if (props.tags.includes('image')) {
    images = image;
  } else if (props.tags.includes('article')) {
    images = notes;
  }

  return (
    <div>
      <div className="resourceCard">
        <img
          className="resourceImage"
          src={images}
          alt="resource type logo"
        ></img>{' '}
        <div className="title">{props.link}Title</div>
      </div>
      <dl className="tags">
        {props.tags.map((tag, index) => {
          return (
            <li key={index}>
              {tag}
              <img alt="tag" className="imageTag" src={Tag}></img>
            </li>
          );
        })}
      </dl>
    </div>
  );
}

export default ResourceCard;
