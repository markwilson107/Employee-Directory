import React from "react";

function Col(props) {
  const size = props.size;

  return <div className={size}>{props.children}</div>;
}

export default Col;
