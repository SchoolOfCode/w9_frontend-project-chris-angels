import { useAuth0 } from "@auth0/auth0-react";
import Avatar from "@mui/material/Avatar";
import React from "react";

const Profile = (props) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  // console.log('profile', user);
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isAuthenticated) {
    props.addUser(user);
  }
  // else if (user === undefined) {
  //   props.addUser({});
  // }
  console.log("before profile return", new Date());

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
