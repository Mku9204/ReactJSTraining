import "./card.css";
const card = (props) => {
  return (
    <div className="main-card">
      <div className="card-content">{props.children}</div>
    </div>
  );
};
export default card;
