import "./blue_button.css";
export const BlueButton = ({ title, kenglik, uzunlik }) => {
  return (
    <button
      className="BlueButton"
      style={{ width: `${kenglik}px`, height: `${uzunlik}px` }}
    >
      {title}
    </button>
  );
};
