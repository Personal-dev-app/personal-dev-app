import React from "react";

const GoogleAuth = ({ auth }) => {
  return <button onClick={() => auth.signIn()}>Sign In with Google</button>;
};

export default GoogleAuth;
