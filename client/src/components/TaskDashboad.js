import React from "react";

const TaskDashboad = ({ auth, setIsSignedIn }) => {
  const onSignOut = async () => {
    await auth.signOut();
    setIsSignedIn(auth.isSignedIn.get());
  };
  return (
    <div>
      Task list
      <br />
      <button onClick={onSignOut}>Sign out</button>
    </div>
  );
};

export default TaskDashboad;
