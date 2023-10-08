type TProps = {
  title?: string;
};

function BoardOverViewCard({ title }: TProps) {
  return (
    <div className="debbug-3">
      <h3>{title}</h3>
    </div>
  );
}

export default BoardOverViewCard;
