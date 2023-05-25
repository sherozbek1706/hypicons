import { BlueButton } from "../../components/blue_button/blue_button";
import "./Grab.css";
export const Grab = () => {
  return (
    <div className="Grab">
      <h1>Grab the pack</h1>
      <p>
        By purchasing the pack you will get access to future additions and
        updates – for life!
      </p>
      <BlueButton title={"Buy now – $14.99"} uzunlik={"50"} kenglik={"250"} />
    </div>
  );
};
