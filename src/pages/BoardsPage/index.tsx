import { useLoaderData, useNavigate } from "react-router-dom";
import { BoardOverViewCard, Button, Input } from "../../components";

function BoardsPage() {
  const jwtToken = useLoaderData();
  const navigate = useNavigate();

  if (!jwtToken) {
    navigate("/login");
  }

  return (
    <>
      <div className="debbug-2 flex flex-col w-full">
        <h2>Boards</h2>
        <Button title="+" />
      </div>
      <div className="debbug-2 flex flex-col h-full w-full">
        <BoardOverViewCard title="Board 1" />
        <BoardOverViewCard title="Board 2" />
        <BoardOverViewCard title="Board 3" />
      </div>
    </>
  );
}

export default BoardsPage;
