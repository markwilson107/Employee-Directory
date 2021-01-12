import React from "react";

function Row(props) {
  return <div className={`row ${props.addClass}`} style={{margin: 0}}>{props.children}</div>;
}

export default Row;
