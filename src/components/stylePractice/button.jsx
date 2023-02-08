import React from "react";
import "./button.module.css";

const Button = (props) => {
  return (
    <div>
      <button className="button_module" {...props}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
