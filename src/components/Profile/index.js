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
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{props.slackusername}</p>
      </div>
    )
  );
};

export default Profile;
