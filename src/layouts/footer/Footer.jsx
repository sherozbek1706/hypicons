import "./Footer.css";
import Logo from "../../assets/logo.png";
export const Footer = () => {
  return (
    <div className="Footer">
      <img src={Logo} alt="LOGO" className="Logo" />
      <h3>
        Created by <a href="https://t.me/sherozbek_17/">@sherozbek_17</a>
      </h3>
      <p>Copyright © 2023. All rights reserved.</p>
    </div>
  );
};
