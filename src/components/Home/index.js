import Header from '../Header';
import LoginButton from '../Login/index.js';
import LogoutButton from '../Logout/index.js';
import Profile from '../Profile/index.js';
import { Link } from 'react-router-dom';
import Resources from '../Resources';
import PanicPicture from '../../Assets/PanicButton.png';
import Button, { panic } from '../Button';
import { useEffect } from 'react';

function Home(props) {
  useEffect(() => {
    console.log('help');
    async function Fetch() {
      let email = props.user.email;
      let response = await fetch(`http://localhost:3001/users?email=${email}`);
      let json = await response.json();
      console.log(json);
      let dataArr = json.data;
      //Check if slackUsername is empty or not, if it is, set a boolean state so a component can be rednered below like login/logout buttons are
    }
    //If the length > 0, then the user has succesfully logged in and we can run our check for username
    if (Object.keys(props.user).length !== 0) {
    }
  }, [props.user]);
  let islogged = false;
  if (Object.keys(props.user).length !== 0) {
    islogged = true;
  }
  return (
    <div className="App">
      <Header />
      {!islogged && <LoginButton />}
      {islogged && <LogoutButton setUser={props.setUser} />}
      <Profile addUser={props.setUser}></Profile>
      <Link to="/panic1">
        <button type="button">
          <img alt="emergency button"></img>
        </button>
      </Link>
      <Button src={PanicPicture} onClick={panic}></Button>

      <Resources
        list={[
          {
            picture:
              'https://images.unsplash.com/photo-1655432961903-74302ae8041b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
            tags: ['diamond', 'night', 'stars', 'video'],
          },
          {
            picture:
              'https://images.unsplash.com/photo-1655432961903-74302ae8041b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
            tags: ['diamond', 'night', 'article'],
          },
          {
            picture:
              'https://images.unsplash.com/photo-1655432961903-74302ae8041b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
            tags: ['diamond', 'stars'],
          },
        ]}
      />
    </div>
  );
}
export default Home;