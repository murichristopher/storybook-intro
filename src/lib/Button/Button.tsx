import "./Button.styles.css";
import React, { ButtonHTMLAttributes } from "react";

const Button = React.forwardRef<HTMLButtonElement>(
  (props: ButtonHTMLAttributes<HTMLButtonElement>, ref) => {
    const { children, ...other } = props;
    return (
      <button ref={ref} {...other}>
        {children}
      </button>
    );
  }
);

export default Button;
