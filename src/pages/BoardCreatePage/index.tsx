import { useLoaderData, useNavigate } from "react-router-dom";
import { BoardOverViewCard, Button, Input } from "../../components";
import React from "react";
import api from "../../services/api";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

function BoardsPage() {
  const [boards, setBoards] = React.useState([]);

  const userState = useSelector((state: RootState) => state.user);

  const jwtToken = useLoaderData();
  const navigate = useNavigate();

  if (!jwtToken) {
    navigate("/login");
  }

  const fetchBoards = async () => {
    userState?._id &&
      (await api
        .get("/board?currentUserId=" + "6524ea72b4f57e609607ca29", {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        })
        .then((response) => {
          setBoards(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          window.alert(error);
        }));
  };

  React.useEffect(() => {
    jwtToken && fetchBoards();
  }, [userState]);

  React.useEffect(() => {
    console.log({ boards });
  }, [boards]);

  return (
    <>
      <div className="debbug-2 flex flex-col w-full">
        <h2>Boards</h2>
        <Button title="+" />
      </div>
      <div className="debbug-2 flex flex-col h-full w-full">
        {boards.map((board: any) => (
          <BoardOverViewCard title={board.title} _id={board._id} />
        ))}
      </div>
    </>
  );
}

export default BoardsPage;
