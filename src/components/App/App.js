import './App.css';
import LoginButton from '../Login/index.js';
import LogoutButton from '../Logout/index.js';
import Profile from '../Profile/index.js';
import Button, { panic } from '../Button';


function App() {
  return (
    <main>
      
    <div className="App">
      <LoginButton /> <LogoutButton /> <Profile></Profile>
    </div>

      <div className="Panic" >
        <Button className="PanicButton" onClick={panic}><img src="/public/PanicButton.png" alt="Panic"></img></Button> 
      </div>
      
    </main>
  );
}

export default App;
