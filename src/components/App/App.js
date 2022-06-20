import './App.css';
import LoginButton from '../Login/index.js';
import LogoutButton from '../Logout/index.js';
import Profile from '../Profile/index.js';
function App() {
  return (
    <div className="App">
      <LoginButton /> <LogoutButton /> <Profile></Profile>
    </div>
  );
}

export default App;
