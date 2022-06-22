import { Link } from 'react-router-dom';
function Header() {
  return (
    <nav className="navbar">
      <Link className="homeLink" to="/">
        Home
      </Link>
      <Link className="resourcesLink" to="/resources">
        Resources
      </Link>
      <Link className="diaryLink" to="/diary">
        Diary
      </Link>
    </nav>
  );
}

export default Header;
