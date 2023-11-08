import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components_styles/chat_modal.css';
import { FaRegWindowClose, FaUser, FaCheckCircle } from 'react-icons/fa';
import { FaCircleXmark  } from 'react-icons/fa6';

const V_chat_modal_ftravel = ({vc_closeModalFTravel}) => {
  return (
    <div className="vc_modal_ftravel">
      <div className="vc_modal_ftravel_container">
        <div className="vc_modal_ftravel_container_title">
          <h1 className='vc_modal_ftravel_title'>Terminar viaje</h1>
        </div>
        <div className="vc_modal_ftravel_close">
          <FaRegWindowClose onClick={vc_closeModalFTravel}/>
        </div>
        <p className='vc_modal_ftravel_subtitle'>Califica a tus compañeros:</p>
        <div className="vc_modal_ftravel_travels_container">
          <div className="vc_modal_ftravel_travel_partners">
            <FaUser className='vc_modal_ftravel_user_icon'/>
            <div className='vc_modal_ftravel_user_information'>
              <span className='vc_modal_ftravel_user_name'>Didier Urbina</span>
            </div>
            <select className='vc_modal_ftravel_option_select'>
              <option value="">1 estrella</option>
              <option value="">2 estrellas</option>
              <option value="">3 estrellas</option>
              <option value="">4 estrellas</option>
              <option value="">5 estrellas</option>
            </select>
          </div>
          <div className="vc_modal_ftravel_travel_partners">
            <FaUser className='vc_modal_ftravel_user_icon'/>
            <div className='vc_modal_ftravel_user_information'>
              <span className='vc_modal_ftravel_user_name'>Didier Urbina</span>
            </div>
            <select className='vc_modal_ftravel_option_select'>
              <option value="">1 estrella</option>
              <option value="">2 estrellas</option>
              <option value="">3 estrellas</option>
              <option value="">4 estrellas</option>
              <option value="">5 estrellas</option>
            </select>
          </div>
          <div className="vc_modal_ftravel_travel_partners">
            <FaUser className='vc_modal_ftravel_user_icon'/>
            <div className='vc_modal_ftravel_user_information'>
              <span className='vc_modal_ftravel_user_name'>Didier Urbina</span>
            </div>
            <select className='vc_modal_ftravel_option_select'>
              <option value="">1 estrella</option>
              <option value="">2 estrellas</option>
              <option value="">3 estrellas</option>
              <option value="">4 estrellas</option>
              <option value="">5 estrellas</option>
            </select>
          </div>
          <div className="vc_modal_ftravel_travel_partners">
            <FaUser className='vc_modal_ftravel_user_icon'/>
            <div className='vc_modal_ftravel_user_information'>
              <span className='vc_modal_ftravel_user_name'>Didier Urbina</span>
            </div>
            <select className='vc_modal_ftravel_option_select'>
              <option value="">1 estrella</option>
              <option value="">2 estrellas</option>
              <option value="">3 estrellas</option>
              <option value="">4 estrellas</option>
              <option value="">5 estrellas</option>
            </select>
          </div>
          <div className="vc_modal_ftravel_travel_partners">
            <FaUser className='vc_modal_ftravel_user_icon'/>
            <div className='vc_modal_ftravel_user_information'>
              <span className='vc_modal_ftravel_user_name'>Didier Urbina</span>
            </div>
            <select className='vc_modal_ftravel_option_select'>
              <option value="">1 estrella</option>
              <option value="">2 estrellas</option>
              <option value="">3 estrellas</option>
              <option value="">4 estrellas</option>
              <option value="">5 estrellas</option>
            </select>
          </div>
          <div className="vc_modal_ftravel_travel_partners">
            <FaUser className='vc_modal_ftravel_user_icon'/>
            <div className='vc_modal_ftravel_user_information'>
              <span className='vc_modal_ftravel_user_name'>Didier Urbina</span>
            </div>
            <select className='vc_modal_ftravel_option_select'>
              <option value="">1 estrella</option>
              <option value="">2 estrellas</option>
              <option value="">3 estrellas</option>
              <option value="">4 estrellas</option>
              <option value="">5 estrellas</option>
            </select>
          </div>
        </div>
        <button className='vc_modal_ftravel_button_accept'>Hecho</button> 
      </div>
    </div>
  );
};

V_chat_modal_ftravel.propTypes = {
  vc_closeModalFTravel: PropTypes.func.isRequired,
};


export default V_chat_modal_ftravel;