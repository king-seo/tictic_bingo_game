import React from "react";

function Button(props) {
  return (
    <button
      onClick={() => {
        props.history.push("/");
      }}
    >
      {props.children}
    </button>
  );
}

export default Button;
