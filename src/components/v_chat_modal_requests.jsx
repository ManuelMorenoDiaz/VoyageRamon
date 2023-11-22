import PropTypes from "prop-types";
import "../styles/components_styles/chat_modal.css";
import { FaRegWindowClose, FaUser, FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

const V_chat_modal_requests = ({ vc_closeModalRequests }) => {
  return (
    <div className="vc_modal_requests">
      <div className="vc_modal_requests_container">
        <div className="vc_modal_requests_container_title">
          <h1 className="vc_modal_requests_title">Solicitudes</h1>
        </div>
        <div className="vc_modal_requests_close">
          <FaRegWindowClose onClick={vc_closeModalRequests} />
        </div>
        <p className="vc_modal_requests_subtitle">Quieren unirse:</p>
        <div className="vc_modal_requests_travels_container">
          <div className="vc_modal_requests_travel_partners">
            <FaUser className="vc_modal_requests_user_icon" />
            <div className="vc_modal_requests_user_information">
              <span className="vc_modal_requests_user_name">Didier Urbina</span>
            </div>
            <div className="vc_modal_requests_user_icons">
              <FaCheckCircle className="vc_modal_requests_user_icon_1" />
              <FaCircleXmark className="vc_modal_requests_user_icon_2" />
            </div>
          </div>
          <div className="vc_modal_requests_travel_partners">
            <FaUser className="vc_modal_requests_user_icon" />
            <div className="vc_modal_requests_user_information">
              <span className="vc_modal_requests_user_name">Didier Urbina</span>
            </div>
            <div className="vc_modal_requests_user_icons">
              <FaCheckCircle className="vc_modal_requests_user_icon_1" />
              <FaCircleXmark className="vc_modal_requests_user_icon_2" />
            </div>
          </div>
          <div className="vc_modal_requests_travel_partners">
            <FaUser className="vc_modal_requests_user_icon" />
            <div className="vc_modal_requests_user_information">
              <span className="vc_modal_requests_user_name">Didier Urbina</span>
            </div>
            <div className="vc_modal_requests_user_icons">
              <FaCheckCircle className="vc_modal_requests_user_icon_1" />
              <FaCircleXmark className="vc_modal_requests_user_icon_2" />
            </div>
          </div>
          <div className="vc_modal_requests_travel_partners">
            <FaUser className="vc_modal_requests_user_icon" />
            <div className="vc_modal_requests_user_information">
              <span className="vc_modal_requests_user_name">Didier Urbina</span>
            </div>
            <div className="vc_modal_requests_user_icons">
              <FaCheckCircle className="vc_modal_requests_user_icon_1" />
              <FaCircleXmark className="vc_modal_requests_user_icon_2" />
            </div>
          </div>
          <div className="vc_modal_requests_travel_partners">
            <FaUser className="vc_modal_requests_user_icon" />
            <div className="vc_modal_requests_user_information">
              <span className="vc_modal_requests_user_name">Didier Urbina</span>
            </div>
            <div className="vc_modal_requests_user_icons">
              <FaCheckCircle className="vc_modal_requests_user_icon_1" />
              <FaCircleXmark className="vc_modal_requests_user_icon_2" />
            </div>
          </div>
          <div className="vc_modal_requests_travel_partners">
            <FaUser className="vc_modal_requests_user_icon" />
            <div className="vc_modal_requests_user_information">
              <span className="vc_modal_requests_user_name">Didier Urbina</span>
            </div>
            <div className="vc_modal_requests_user_icons">
              <FaCheckCircle className="vc_modal_requests_user_icon_1" />
              <FaCircleXmark className="vc_modal_requests_user_icon_2" />
            </div>
          </div>
          <div className="vc_modal_requests_travel_partners">
            <FaUser className="vc_modal_requests_user_icon" />
            <div className="vc_modal_requests_user_information">
              <span className="vc_modal_requests_user_name">Didier Urbina</span>
            </div>
            <div className="vc_modal_requests_user_icons">
              <FaCheckCircle className="vc_modal_requests_user_icon_1" />
              <FaCircleXmark className="vc_modal_requests_user_icon_2" />
            </div>
          </div>
          <div className="vc_modal_requests_travel_partners">
            <FaUser className="vc_modal_requests_user_icon" />
            <div className="vc_modal_requests_user_information">
              <span className="vc_modal_requests_user_name">Didier Urbina</span>
            </div>
            <div className="vc_modal_requests_user_icons">
              <FaCheckCircle className="vc_modal_requests_user_icon_1" />
              <FaCircleXmark className="vc_modal_requests_user_icon_2" />
            </div>
          </div>
          <div className="vc_modal_requests_travel_partners">
            <FaUser className="vc_modal_requests_user_icon" />
            <div className="vc_modal_requests_user_information">
              <span className="vc_modal_requests_user_name">Didier Urbina</span>
            </div>
            <div className="vc_modal_requests_user_icons">
              <FaCheckCircle className="vc_modal_requests_user_icon_1" />
              <FaCircleXmark className="vc_modal_requests_user_icon_2" />
            </div>
          </div>
          <div className="vc_modal_requests_travel_partners">
            <FaUser className="vc_modal_requests_user_icon" />
            <div className="vc_modal_requests_user_information">
              <span className="vc_modal_requests_user_name">Didier Urbina</span>
            </div>
            <div className="vc_modal_requests_user_icons">
              <FaCheckCircle className="vc_modal_requests_user_icon_1" />
              <FaCircleXmark className="vc_modal_requests_user_icon_2" />
            </div>
          </div>
        </div>
        <button className="vc_modal_requests_button_accept">Hecho</button>
      </div>
    </div>
  );
};

V_chat_modal_requests.propTypes = {
  vc_closeModalRequests: PropTypes.func.isRequired,
};

export default V_chat_modal_requests;
