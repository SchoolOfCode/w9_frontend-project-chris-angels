import './App.css';
import PanicButton from '../PanicButton/index.js';
import Resources from '../Resources/index.js';
import Settings from '../Settings/index.js';
import ProtectedRoute from '../ProtectedRoute';
import Home from '../Home/index.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useState } from 'react';

import Diary from '../Diary';

function App() {
  const [user, setUser] = useState({});

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home user={user} setUser={setUser} />}
        ></Route>
        <Route
          path="/settings"
          element={
            <ProtectedRoute user={user} component={Settings}></ProtectedRoute>
          }
        ></Route>
        <Route
          path="/diary"
          element={
            <ProtectedRoute user={user} component={Diary}></ProtectedRoute>
          }
        ></Route>
        <Route path="/resources" element={<Resources header={true} />}></Route>
        <Route path="/panic1" element={<PanicButton />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
