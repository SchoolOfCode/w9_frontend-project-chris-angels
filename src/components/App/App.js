import './App.css';
import LoginButton from '../Login/index.js';
import LogoutButton from '../Logout/index.js';
import Profile from '../Profile/index.js';
import Button, { panic } from '../Button';
import PanicButton from '../../Assets/PanicButton.png'

function App() {
  return (
    <main>
      
    <div className="App">
      <LoginButton /> <LogoutButton /> <Profile></Profile>
      </div>
      
      <Button src={PanicButton} onClick={panic}></Button> 
      
    </main>
  );
}

export default App;
