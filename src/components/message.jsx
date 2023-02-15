import React from "react";

const Message = (props) => {
  // console.log("色");
  const { color, children } = props;
  const ContentStyle = {
    // color: color,
    color,
    Fontsize: "18px"
  };
  return <p style={ContentStyle}>{children}</p>;
};

export default Message;
