import React from "react";

function Profile(props) {
  const { id } = props.match.params.id;
  return <div>{id === undefined ? " Profile" : `Profile:${id}`}</div>;
}

export default Profile;
