import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import './App.css';

function App() {
  const [user, setUser] = useState({});

  const handleInitGoogleAccounts = response => {
    const userFromJwt = jwt_decode(response.credential);
    console.log(userFromJwt);
    setUser(userFromJwt)
  };

  /* global google */
  useEffect(() => {
    google.accounts.id.initialize({
      client_id: "252883769286-1d5it2rfeqtslt3h0mbkrvdb3i7gh0lk.apps.googleusercontent.com",
      callback: handleInitGoogleAccounts
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );
  }, []);

  return (
    <div className="App">
      <div id="signInDiv"></div>
    </div>
  );
}

export default App;
