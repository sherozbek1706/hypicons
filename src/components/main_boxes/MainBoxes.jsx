import { BoxesBox } from "../boxes_box/boxesBox";
import "./MainBoxes.css";
export const MainBoxes = () => {
  return (
    <div className="Main__boxes">
      <BoxesBox
        title="3D rendered icons"
        text="Not a flat vector graphic in sight – this pack has been meticulously crafted in shiny 3D beauty."
      />
      <BoxesBox
        title="High definition"
        text="Each icon has been rendered at 2048px, ludicrously large for an icon but it's just nice to see the details sometimes."
      />
      <BoxesBox
        title="Over 100 icons included"
        text="Included in this pack are over 100 icons of the most commonly used apps and utilities."
      />
    </div>
  );
};
