import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Button from "@mui/material/Button";
import "./Logout.css";

/*
  Logout button component from auth0, used alongside the login button component and the profile component
  Props: user -> state given from App, setState -> setState given from App. 
  Used to keep track of if there is a current user. 
*/

/*The sx prop in the Button element allows styling of the MUI elements directly in JSX */

function LogoutButton() {
  const { logout } = useAuth0();
  function logoutUser() {
    logout({ returnTo: window.location.origin });
  }
  return (
    <Button
      id="logout-btn"
      variant="outlined"
      sx={{
        color: "black",
        backgroundColor: "#dcdde1",
        borderColor: "#192a56",
      }}
      onClick={() => logoutUser()}
    >
      Log Out
    </Button>
  );
}

export default LogoutButton;
