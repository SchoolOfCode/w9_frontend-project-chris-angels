import './App.css';
import LoginButton from '../Login/index.js';
import LogoutButton from '../Logout/index.js';
import Profile from '../Profile/index.js'
import Button, { panic } from '../Button';
import PanicButton from '../../Assets/PanicButton.png'
import Resources from '../Resources/index.js';
import Header from '../Header/index.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'

function App() {
  const [user, setUser] = useState({});
  return (


    <Router>
      <div className="App">
        <LoginButton /> <LogoutButton /> <Profile addUser={setUser}></Profile>
      </div>
        <Button src={PanicButton} onClick={panic}></Button> 
      <Header />
      <Routes>
        <Route path="/" element={<div>Hello home</div>}></Route>
        <Route path="/resources" element={<Resources user={user} />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
