import React from "react";

export default function (props) {
  var color = props.color;
  var fillColor = props.fillColor;
  return (
    <button
      style={{
        borderColor: { color },
        backgroundColor: { fillColor },
        fontSize: "20px",
        borderRadius: "12px",
        paddingTop: "7px",
        paddingBottom: "7px",
        paddingRight: "12px",
        paddingLeft: "12px",
      }}
    >
      {props.title}
    </button>
  );
}
