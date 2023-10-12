import React from "react";
import { useDispatch } from "react-redux";
import { resetUserData } from "../../slices/userSlice";
import { useLoaderData, useNavigate } from "react-router-dom";

type TProps = {
  children?: React.ReactElement | React.ReactElement[];
};

function SecondaryWrapper({ children }: TProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useLoaderData();
  return (
    <>
      <div className={`${token ? "flex" : "hidden"} w-full justify-between`}>
        <span>KANBAN</span>
        <span
          onClick={() => {
            dispatch(resetUserData());
            localStorage.removeItem("jwtToken");
            navigate("/login");
          }}
        >
          Logout
        </span>
      </div>
      <div className="debbug flex w-full flex-col flex-1 justify-center items-center">
        {children}
      </div>
    </>
  );
}

export default SecondaryWrapper;
