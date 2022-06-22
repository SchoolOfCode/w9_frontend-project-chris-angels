import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function Header({ logged }) {
  // console.log('logged is:', logged);
  return (
    <nav className="navbar">
      {logged && (
        <Button
          variant="contained"
          onClick={() => {
            document
              .querySelector(".modalcontainer2")
              .classList.remove("hidden");
          }}
        >
          New Entry
        </Button>
      )}
      {!logged && (
        <button
          disabled
          onClick={() => {
            document
              .querySelector(".modalcontainer2")
              .classList.remove("hidden");
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
        <Button variant="contained">Settings</Button>
      </Link>
    </nav>
  );
}

export default Header;
