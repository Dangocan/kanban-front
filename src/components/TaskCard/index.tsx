type TTask = {
  title: string;
  userInCharge?: string;
};

function TaskCard({ title, userInCharge }: TTask) {
  return (
    <div className="debbug-3">
      <h4>{title}</h4>
      <span>{userInCharge}</span>
    </div>
  );
}

export default TaskCard;
