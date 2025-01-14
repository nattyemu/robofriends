import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflow: "scroll",
        border: "3px solid black",
        height: "520px",
        overflowX: "hidden",
        scrollbarWidth: "thin",
        scrollbarColor: "transparent",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
