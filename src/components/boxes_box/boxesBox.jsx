import "./boxesBox.css";
export const BoxesBox = ({ title, text }) => {
  return (
    <div className="BoxesBox">
      <h3 className="BoxesBox__title">{title}</h3>
      <p className="BoxesBox__text">{text}</p>
    </div>
  );
};
