import React from "react";

const GoogleAuth = ({ auth, setIsSignedIn }) => {
  const onSignInClick = async () => {
    await auth.signIn();
    setIsSignedIn(auth.isSignedIn.get());
  };
  return <button onClick={onSignInClick}>Sign In with Google</button>;
};

export default GoogleAuth;
