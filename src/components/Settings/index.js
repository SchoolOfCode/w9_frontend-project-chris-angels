import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../Logout";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";

function Settings(props) {
  const [currName, setName] = useState(false);
  const [placeholderName, setPlaceHolder] = useState("");
  const user = useRef("");
  useEffect(() => {
    // function to fetch the data from the database
    async function Fetch() {
      let response = await fetch(
        `http://localhost:3001/users?email=${props.user.email}`
      );
      let json = await response.json();
      console.log("hi", json.data[0]);
      user.current = json.data[0];
      setPlaceHolder(json.data[0].slackusername);
      console.log("ayo", user);
    }
    Fetch();
  });
  console.log("settings page", props.user);
  //This code will probably be removed once protected routes are a thing
  let islogged = false;
  if (Object.keys(props.user).length !== 0) {
    islogged = true;
  }
  // console.log('asdasd', user.current.slackusername);
  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target.elements[0].value);
    let res = await fetch(
      `http://localhost:3001/users?email=${user.current.email}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slackUsername: e.target.elements[0].value,
        }),
      }
    );
    user.current.slackusername = e.target.elements[0].value;
    console.log(res);
    // console.log(await res.json());
    setName(!currName);
  }
  return (
    <div>
      {islogged && <LogoutButton></LogoutButton>}
      <div>{placeholderName}</div>
      <Link to="/">Home</Link>
      <main id="settingsMain">
        <form
          id="settingsForm"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div>
            {/*<label htmlFor="usernameInput">Slack Username: </label>*/}
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <AccountCircle
                sx={{ color: "#dcdde1", mr: 1, my: 0.5, mb: 1.5 }}
                fontSize="large"
              />
              <TextField
                sx={{
                  color: "#dcdde1",
                  border: "#dcdde1",
                }}
                variant="outlined"
                label="Slack Username:"
                type="text"
                id="usernameInput"
                placeholder={user.current.slackusername}
                required
              ></TextField>
            </Box>
          </div>
          <Button variant="outlined">Update username</Button>
        </form>
      </main>
    </div>
  );
}
export default Settings;
