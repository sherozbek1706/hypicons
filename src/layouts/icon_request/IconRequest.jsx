import "./IconRequest.css";
import IconReq from "../../assets/icon_request.png";
import { BlueButton } from "../../components/blue_button/blue_button";
export const IconRequest = () => {
  return (
    <div className="IconRequest">
      <img src={IconReq} alt="" />
      <div className="IconRequest__text">
        <h1>Icon request </h1>
        <p>
          If you find that the pack is missing any icons, feel free to send me a
          message and I will do my best to create one. Purchasing the pack will
          give you access to any future updates.
        </p>
        <BlueButton title={"Get in touch"} uzunlik={"50"} kenglik={"250"} />
      </div>
    </div>
  );
};
