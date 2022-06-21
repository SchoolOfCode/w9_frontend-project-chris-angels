import './App.css';
import LoginButton from '../Login/index.js';
import LogoutButton from '../Logout/index.js';
import Profile from '../Profile/index.js';
import Resources from '../Resources/index.js';
import Header from '../Header/index.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [user, setUser] = useState({});
  console.log(user);
  let islogged = false;
  if (Object.keys(user).length !== 0) {
    islogged = true;
  }
  return (
    <Router>
      <div className="App">
        {!islogged && <LoginButton />}
        {islogged && <LogoutButton />}
        <Profile addUser={setUser}></Profile>
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<div>Hello home</div>}></Route>
        <Route path="/resources" element={<Resources user={user} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
