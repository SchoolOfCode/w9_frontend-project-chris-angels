import { Link } from 'react-router-dom';
function Header() {
  return (
    <nav className="navbar">
      <Link className="homeLink" to="/">Home</Link>
      <Link className="resourcesLink" to="/resources">Resources</Link>
    </nav>
  );
}

export default Header;
