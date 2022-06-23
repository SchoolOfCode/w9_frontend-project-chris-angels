import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
// import Avatar from "@mui/material/Avatar";
/**
 *
 * @param {*} props: setUser state as addUser from App
 * @returns
 */
const Profile = (props) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isAuthenticated) {
    props.addUser(user);
  }
  return (
    isAuthenticated && (
      <div id="profile-container">
        <img id="profile-picture" src={user.picture} alt={user.name} />
        <h2 id="profile-name">{user.name}</h2>
        <p id="profile-email">{user.email}</p>
        <p id="profile-slackusername">{props.slackusername}</p>
      </div>
    )
  );
};

export default Profile;
