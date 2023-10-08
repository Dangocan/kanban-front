import { BoardColumn, Button, Input, TaskCard } from "../../components";

const MOCK_BOARD = {
  boardTitle: "Board 1",
};

function BoardDetailsPage() {
  return (
    <>
      <div className="debbug-2 flex flex-col w-full">
        <div className="flex justify-between">
          <h2>{MOCK_BOARD.boardTitle}</h2>
          <Button title="config" />
        </div>
        <Input />
      </div>
      <div className="debbug-2 flex h-full w-full overflow-scroll">
        <BoardColumn title="to do">
          <TaskCard title="Task 1" userInCharge={"teste"} />
          <TaskCard title="Task 1" userInCharge={"teste"} />
        </BoardColumn>
        <BoardColumn title="in progress">
          <TaskCard title="Task 1" userInCharge={"teste"} />
        </BoardColumn>
        <BoardColumn title="done">
          <TaskCard title="Task 1" userInCharge={"teste"} />
          <TaskCard title="Task 1" userInCharge={"teste"} />
          <TaskCard title="Task 1" userInCharge={"teste"} />
        </BoardColumn>
      </div>
    </>
  );
}

export default BoardDetailsPage;
