import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Button from "@mui/material/Button";

function LogoutButton(props) {
  const { logout } = useAuth0();
  console.log("log out button", props);
  function logoutUser() {
    props.setUser({});
    props.setNewUser(false);
    logout({ returnTo: window.location.origin });
  }
  return (
    <Button
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
