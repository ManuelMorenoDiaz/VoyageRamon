import { useState } from "react";
import classnames from "classnames";
import Register from "../components/login/register.jsx"
import Login from "../components/login/login";
import Overlay from "../components/login/overlay.jsx";
import Media from "react-media";

function RegistroLogin() {
  const [swapPanel, setSwapPanel] = useState(true);

  const signUpButton = (setSwapPaneltrue) => {
    setSwapPanel(setSwapPaneltrue);
  };

  const signInButton = (setSwapPanelfalse) => {
    setSwapPanel(setSwapPanelfalse);
  };

  return (
    <div className="Login_registro">
      <div
        className={classnames("container", { "right-panel-active": swapPanel })}
        id="container"
      >
        <Register swapPanel={swapPanel} setSwapPanelfalse={signInButton} />
        <Login swapPanel={swapPanel} setSwapPaneltrue={signUpButton} />
        <Media query="(min-width: 768px)">
          {(matches) => {
            return matches ? <Overlay /> : "No matches";
          }}
        </Media>
      </div>
    </div>
  );
}

export default RegistroLogin;
