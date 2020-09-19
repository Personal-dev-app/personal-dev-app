import React, { useEffect, useState } from "react";
import GoogleAuth from "./components/GoogleAuth";

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const App = () => {
  const [auth, setGoogleAuth] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(null);

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      // initializing the library
      window.gapi.client
        .init({
          clientId: CLIENT_ID,
          scope: "email",
        })
        .then(() => {
          // provides methods to allow the user to sign in with a Google account
          const GoogleAuth = window.gapi.auth2.getAuthInstance();
          setGoogleAuth(GoogleAuth);
          setIsSignedIn(GoogleAuth.isSignedIn.get());
        });
    });
  }, []);

  const renderTest = (isSignedIn) => {
    return isSignedIn ? "you are signed in" : <GoogleAuth auth={auth} />;
  };

  return <div>{renderTest(isSignedIn)}</div>;
};

export default App;
