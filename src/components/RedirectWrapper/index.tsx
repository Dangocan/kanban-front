import React from "react";
import { useLoaderData } from "react-router-dom";
import { BoardsPage, LoginPage } from "../../pages";
import { SecondaryWrapper } from "..";

type TProps = {
  children?: React.ReactElement | React.ReactElement[];
};

function RedirectWrapper({ children }: TProps) {
  const token = useLoaderData();

  if (token) {
    return (
      <SecondaryWrapper>
        <BoardsPage />
      </SecondaryWrapper>
    );
  } else {
    return <LoginPage />;
  }
}

export default RedirectWrapper;
