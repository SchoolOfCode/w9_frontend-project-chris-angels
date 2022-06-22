import "./App.css";
import PanicButton from "../PanicButton/index.js";
import Resources from "../Resources/index.js";
import Settings from "../Settings/index.js";
import Home from "../Home/index.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState } from "react";

function App() {
  const [user, setUser] = useState({});
  console.log(user);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home user={user} setUser={setUser} />}
        ></Route>
        <Route path="/settings" element={<Settings user={user} />}></Route>
        <Route
          path="/resources"
          element={
            <Resources 
              list={[
                {
                  picture:
                    "https://images.unsplash.com/photo-1655432961903-74302ae8041b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
                  tags: ["diamond", "night", "stars"],
                },
                {
                  picture:
                    "https://images.unsplash.com/photo-1655432961903-74302ae8041b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
                  tags: ["diamond", "night"],
                },
                {
                  picture:
                    "https://images.unsplash.com/photo-1655432961903-74302ae8041b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
                  tags: ["diamond", "stars"],
                },
              ]}
            />
          }
        ></Route>
        <Route path="/panic1" element={<PanicButton />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
