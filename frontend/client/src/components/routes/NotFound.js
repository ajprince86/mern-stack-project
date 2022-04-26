import React from "react";
import image from "../images/workout_fail.png";
import "../css/notFound.css";

function NotFound() {
  return (
    <div>
      <h1 className="not-found">Seems Like you made a slight mistake</h1>
      <img className="img-notfound" src={image} alt="Nothing" />
    </div>
  );
}

export default NotFound;
