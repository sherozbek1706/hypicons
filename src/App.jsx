import "./App.css";
import { DIcons } from "./layouts/D_icons/DIcons";
import { BigSure } from "./layouts/big_sure/BigSure";
import { Footer } from "./layouts/footer/Footer";
import { General } from "./layouts/general/general";
import { Grab } from "./layouts/grab/Grab";
import { IconRequest } from "./layouts/icon_request/IconRequest";
import { Main } from "./layouts/main/main";
import { UniqueIcons } from "./layouts/unique_icons/unique_icons";
export const App = () => {
  return (
    <>
      <Main />
      <UniqueIcons />
      <DIcons />
      <BigSure />
      <General />
      <IconRequest />
      <Grab />
      <Footer />
      <div className="device">
        <h1>Your device is so small!</h1>
      </div>
    </>
  );
};
