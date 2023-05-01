import React from "react";
import "./button.css";


function Button(props) {
  const { label, onClick, variant } = props;
  const classes = `Button ${variant ? `Button-${variant}` : ""}`;

  return (
    <button className={classes} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;