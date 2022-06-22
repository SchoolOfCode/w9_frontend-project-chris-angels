import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Button from "@mui/material/Button";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      variant="outlined"
      sx={{
        color: "black",
        backgroundColor: "#dcdde1",
        borderColor: "#192a56",
      }}
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Button>
  );
};

export default LoginButton;

// test
