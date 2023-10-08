import React from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

function Button({ title, ...props }: IProps) {
  return <button {...props}>{title}</button>;
}

export default Button;
