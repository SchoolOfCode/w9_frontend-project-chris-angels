import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

function LogoutButton(props) {
  const { logout } = useAuth0();
  console.log('log out button', props);
  function logoutUser() {
    props.setUser({});
    logout({ returnTo: window.location.origin });
  }
  return <button onClick={() => logoutUser()}>Log Out</button>;
}

export default LogoutButton;
