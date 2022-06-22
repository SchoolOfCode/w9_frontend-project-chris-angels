// import { useEffect } from 'react';
import LogoutButton from '../Logout';
function Settings(props) {
  console.log('settings page', props.user);
  //This code will probably be removed once protected routes are a thing
  let islogged = false;
  if (Object.keys(props.user).length !== 0) {
    islogged = true;
  }

  return (
    <main>
      <form>
        <button>Hi</button>
      </form>
      {islogged && <LogoutButton></LogoutButton>}
    </main>
  );
}
export default Settings;
