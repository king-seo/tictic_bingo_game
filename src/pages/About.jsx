import React from "react";
import queryString from "query-string";
import Button from "../Components/Button";

function About(props) {
  console.log(new URLSearchParams(props.location.search).get("name"));
  const { name } = queryString.parse(props.location.search);
  return (
    <div>
      <h2>About</h2>
      {name && <p>name 는 {name} 입니다.</p>}
      <Button {...props}>안녕</Button>
    </div>
  );
}

export default About;
