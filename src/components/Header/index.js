import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function Header({ logged }) {
  // console.log('logged is:', logged);
  return (
    <header>
      <nav className="navbar">
        {logged && (
          <Button
            variant="contained"
            onClick={() => {
              document
                .querySelector('.modalcontainer2')
                .classList.remove('hidden');
            }}
          >
            New Entry
          </Button>
        )}
        {!logged && (
          <Button
            disabled
            sx={{
              backgroundColor: '#dcdde1',
            }}
            onClick={() => {
              document
                .querySelector('.modalcontainer2')
                .classList.remove('hidden');
            }}
          >
            New Entry
          </Button>
        )}
        <Link className="homeLink" to="/">
          <Button variant="contained">Home</Button>
        </Link>
        <Link className="resourcesLink" to="/resources">
          <Button variant="contained">Resources</Button>
        </Link>
        <Link className="diaryLink" to="/diary">
          <Button variant="contained">Diary</Button>
        </Link>
        <Link to="/settings">
          <Button variant="contained">Settings</Button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
