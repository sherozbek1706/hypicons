import "./unique_icons.css";
import UniquePhone from "../../assets/phone.png";
import { BlueButton } from "../../components/blue_button/blue_button";
export const UniqueIcons = () => {
  return (
    <div className="UniqueIcons">
      <div className="UniqueIcons__text">
        <h1>100+ Unique icons</h1>
        <p className="text__paragraph">Over 100 of the most commonly use app icons</p>
        <p className="text__paragraph">Optimised for iOS with solid black backgrounds</p>
        <p className="text__paragraph">Transparent PNG versions to do what you like with</p>
        <p className="text__paragraph">Mac OS optimised versions</p>
        <p className="text__paragraph">Access to any future additions or updates</p>
        <p className="text__paragraph">Installation instructions included</p> <br /><br />
        <BlueButton title="Buy now - $14.99" uzunlik="50" kenglik="250" />
      </div>
      <img src={UniquePhone} alt="Phone" />
    </div>
  );
};
