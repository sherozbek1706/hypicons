import "./main.css";
import logo from "../../assets/logo.png";
import { BlueButton } from "../../components/blue_button/blue_button";
import { MainBoxes } from "../../components/main_boxes/MainBoxes";
export const Main = () => {
  return (
    <div className="Main">
      <div className="Main__header">
        <img src={logo} alt="Logo" className="header__logo" />
        <div className="Main__nav">
          <a href="#" className="nav__link">
            Intro
          </a>
          <a href="#" className="nav__link">
            What`s Included?
          </a>
          <a href="#" className="nav__link">
            Icon Request
          </a>
        </div>
        <BlueButton title="Buy Now" />
      </div>
      <div className="Main__custom">
        <p className="custom__pack">Custom icon pack</p>
        <p className="custom__text">
          A wildly over the top, neon themed icon pack for your device
          customisation.
        </p>
        <BlueButton title="Buy now - $14.99" kenglik="200" uzunlik="40" />
      </div>
      <MainBoxes />
    </div>
  );
};
