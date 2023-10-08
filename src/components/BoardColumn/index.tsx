import React from "react";
import { Button } from "..";

type TProps = {
  title: string;
  children?: React.ReactElement | React.ReactElement[];
};

function BoardColumn({ children, title }: TProps) {
  return (
    <div className="debbug-3 min-w-[60vw] h-full flex flex-col items-center">
      <div className="debbug flex flex-col">
        <h3>{title}</h3>
        <Button title="+" />
      </div>
      <div className="debbug flex flex-1 flex-col">{children}</div>
    </div>
  );
}

export default BoardColumn;
