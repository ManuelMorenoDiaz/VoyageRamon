import "../../styles/Login/overlay.css";
import logo from "../../assets/img/voyage.jpg";

const Overlay = () => {
  return (
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <img src={logo} className="img_logo" />
        </div>
        <div className="overlay-panel overlay-right">
          <img src={logo} className="img_logo" />
        </div>
      </div>
    </div>
  );
};

export default Overlay;
