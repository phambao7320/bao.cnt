import React from "react";

type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  type?: "button" | "reset" | "submit";
};

const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 border rounded-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
