type TProps = {
  _id: string;
  title?: string;
};

function BoardOverViewCard({ title, _id }: TProps) {
  return (
    <div className="debbug-3">
      <h3>{title}</h3>
    </div>
  );
}

export default BoardOverViewCard;
