import React, { useEffect, useState } from "react";
const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const GoogleAuth = () => {
  const [auth, setGoogleAuth] = useState(null);
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
        });
    });
  }, []);

  console.log("this should be initialized", auth);
  return <div>Button</div>;
};

export default GoogleAuth;
