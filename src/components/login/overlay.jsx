import logo from "../../assets/img/voyage.png";
import "../../styles/Login/overlay.css";

const Overlay = () => {
  return (
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <img className="img_logo" src={logo} />
          <br />
        </div>
        <div className="overlay-panel overlay-right">
          <img className="img_logo" src={logo} />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Overlay;
