import Header from '../Header';
import LoginButton from '../Login/index.js';
import LogoutButton from '../Logout/index.js';
import Profile from '../Profile/index.js';
import { Link } from 'react-router-dom';
import Resources from '../Resources';
import PanicPicture from '../../Assets/PanicButton.png';
import NotesForm from '../NotesForm/index.js';
import ProgressBar from '../ProgressBar';
import Button from '../Button';
import { useEffect, useState } from 'react';
import Prompt from '../Prompt';

function Home(props) {
  // console.log('home', props.user);
  const [newUser, setNewUser] = useState(false);
  const [slack, setSlackName] = useState('');
  useEffect(() => {
    console.log('user changed so fetch is being ran');
    async function Fetch() {
      let email = props.user.email;
      let response = await fetch(`http://localhost:3001/users?email=${email}`);
      let json = await response.json();
      // console.log(json);
      let dataArr = json.data;

      // slack.current = dataArr[0].slackusername;
      if (slack !== dataArr[0].slackusername) {
        setSlackName(dataArr[0].slackusername);
      }
      if (dataArr.length === 0) {
        // console.log('dataArr', dataArr[0].slackusername);
        //If the length === 0, then the user has succesfully logged in and we need to add them to the database
        setNewUser(true);
        // slack.current = dataArr[0].slackusername;
      }
      //Check if slackUsername is empty or not, if it is, set a boolean state so a component can be rednered below like login/logout buttons are
    }
    // console.log('fetch called in Home', props.user);
    if (Object.keys(props.user).length !== 0) {
      Fetch();
    }
  }, [props.user, slack]);

  let islogged = false;
  if (Object.keys(props.user).length !== 0) {
    islogged = true;
  }
  console.log('before return', new Date(), slack.current);

  return (
    <div className="App">
      <Header logged={islogged} />
      {islogged && <ProgressBar email={props.user.email} />}
      {!islogged && <LoginButton />}
      {islogged && (
        <LogoutButton setNewUser={setNewUser} setUser={props.setUser} />
      )}
      <Profile slackusername={slack} addUser={props.setUser}></Profile>
      {newUser && <Prompt email={props.user.email} />}
      <Link className="panicBox" to="/panic1">
        <Button src={PanicPicture}> </Button>
      </Link>

      <NotesForm email={props.user.email}></NotesForm>
      <Resources />
    </div>
  );
}
export default Home;
