import { Link } from 'react-router-dom';
function Header({ logged }) {
  // console.log('logged is:', logged);
  return (
    <nav className="navbar">
      {logged && (
        <button
          onClick={() => {
            document
              .querySelector('.modalcontainer2')
              .classList.remove('hidden');
          }}
        >
          New Entry
        </button>
      )}
      {!logged && (
        <button
          disabled
          onClick={() => {
            document
              .querySelector('.modalcontainer2')
              .classList.remove('hidden');
          }}
        >
          New Entry
        </button>
      )}
      <Link className="homeLink" to="/">
        Home
      </Link>
      <Link className="resourcesLink" to="/resources">
        Resources
      </Link>
      <Link className="diaryLink" to="/diary">
        Diary
      </Link>
      <Link to="/settings">
        <button>Settings</button>
      </Link>
    </nav>
  );
}

export default Header;
