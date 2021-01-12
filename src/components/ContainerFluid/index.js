import React from "react";

function ContainerFluid(props) {
  return <div className="container-fluid" style={{padding: 0}}>{props.children}</div>;
}

export default ContainerFluid;
