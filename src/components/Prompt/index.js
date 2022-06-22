function Prompt(props) {
  return (
    <div className="modalcontainer">
      <div
        onClick={() => {
          document.querySelector('.modalcontainer').classList.add('hidden');
        }}
      >
        Working
      </div>
      <input id="username" type="text" placeholder="username"></input>
      <button
        onClick={async () => {
          //post with email and username

          console.log(
            'Submission button clicked',
            props.email,
            document.getElementById('username').value
          );
          let username = document.getElementById('username').value;
          document.getElementById('username').value = '';
          document.querySelector('.modalcontainer').classList.add('hidden');
          let res = await fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: props.email,
              slackUsername: username,
            }),
          });
          console.log(res);
          console.log(await res.json());
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Prompt;
