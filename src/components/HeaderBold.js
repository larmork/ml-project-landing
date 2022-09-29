import "../../css//App.css";
import React from "react";

function HeaderBold(props) {
  return (
    <div className="container px-0">
      <span className="header-bold">{props.name}</span>
    </div>
  );
}

export default HeaderBold;
