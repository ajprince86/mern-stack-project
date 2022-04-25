import React from "react";
import image from "../images/workout_fail.png";

function NotFound() {
  return (
    <div>
      <h1 className="h1-notFound">Seems Like you made a slight mistake</h1>
      <img className="img-notfound" src={image} alt="Nothing" />
    </div>
  );
}

export default NotFound;
