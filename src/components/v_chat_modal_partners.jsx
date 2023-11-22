import PropTypes from "prop-types";
import "../styles/components_styles/chat_modal.css";
import { FaRegWindowClose, FaUser } from "react-icons/fa";

const V_chat_modal_partners = ({ vc_closeModalPartners }) => {
  return (
    <div className="vc_modal_partners">
      <div className="vc_modal_partners_container">
        <div className="vc_modal_partners_container_title">
          <h1 className="vc_modal_partners_title">Compartir</h1>
        </div>
        <div className="vc_modal_partners_close">
          <FaRegWindowClose onClick={vc_closeModalPartners} />
        </div>
        <p className="vc_modal_partners_subtitle">Añadir personas</p>
        <input type="text" className="vc_modal_partners_input" />
        <p className="vc_modal_partners_subtitle">Compañeros de viaje</p>
        <div className="vc_modal_partners_travels_container">
          <div className="vc_modal_partners_travel_partners">
            <FaUser className="vc_modal_partners_user_icon" />
            <div className="vc_modal_partners_user_information">
              <span className="vc_modal_partners_user_name">Didier Urbina</span>
              <span className="vc_modal_partners_user_email">
                didier.urbina@gmail.com
              </span>
            </div>
          </div>
          <div className="vc_modal_partners_travel_partners">
            <FaUser className="vc_modal_partners_user_icon" />
            <div className="vc_modal_partners_user_information">
              <span className="vc_modal_partners_user_name">Manuel Moreno</span>
              <span className="vc_modal_partners_user_email">
                manuel.moreno@gmail.com
              </span>
            </div>
          </div>
          <div className="vc_modal_partners_travel_partners">
            <FaUser className="vc_modal_partners_user_icon" />
            <div className="vc_modal_partners_user_information">
              <span className="vc_modal_partners_user_name">Manuel Moreno</span>
              <span className="vc_modal_partners_user_email">
                manuel.moreno@gmail.com
              </span>
            </div>
          </div>
          <div className="vc_modal_partners_travel_partners">
            <FaUser className="vc_modal_partners_user_icon" />
            <div className="vc_modal_partners_user_information">
              <span className="vc_modal_partners_user_name">Manuel Moreno</span>
              <span className="vc_modal_partners_user_email">
                manuel.moreno@gmail.com
              </span>
            </div>
          </div>
        </div>
        <button className="vc_modal_partners_button_accept">Hecho</button>
      </div>
    </div>
  );
};

V_chat_modal_partners.propTypes = {
  vc_closeModalPartners: PropTypes.func.isRequired,
};

export default V_chat_modal_partners;
