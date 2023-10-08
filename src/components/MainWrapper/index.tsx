import React from "react";

type TProps = {
  children?: React.ReactElement | React.ReactElement[];
};

function MainWrapper({ children }: TProps) {
  return (
    <div className="debbug w-screen h-screen flex flex-col justify-center items-center">
      {children}
    </div>
  );
}

export default MainWrapper;
