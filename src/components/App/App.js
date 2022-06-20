import './App.css';
import LoginButton from '../Login/index.js';
import LogoutButton from '../Logout/index.js';
import Profile from '../Profile/index.js';
import Resources from '../Resources/index.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <LoginButton /> <LogoutButton /> <Profile></Profile>
      </div>
      <Routes>
        <Route path="/" element={<div>Hello home</div>}></Route>
        <Route path="/resources" element={<Resources />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
