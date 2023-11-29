import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/components_styles/chat_modal.css";
import { FaRegWindowClose, FaUser, FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { getUser_PostRequest, deleteUser_PostRequest, updateUser_PostRequest } from "../api/user_post"

const V_chat_modal_requests = ({ vc_closeModalRequests, id_post }) => {

  const [invitedUser, setInvitedUser] = useState()

  const fetchUserPost = async () => {
    try {

      const post = {"post_id": id_post}

      const response = await getUser_PostRequest(post);

      const invitados = response.data.filter(
        (invited) => invited.tipo === "Pending"
      );

      console.log(invitados)

      setInvitedUser(invitados);

    } catch (error) {
      console.log("Error fetching places:", error);
    }
  };

  useEffect(() => {
    fetchUserPost()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDelete = async (id) => {
    const res = await deleteUser_PostRequest(id)
    fetchUserPost()
  }

  const onUpdate = async (id) => {

    const data = { tipo: 'Participant'}
    
    const res = await updateUser_PostRequest(id, data)
    fetchUserPost()
  }

  return (
    <div className="vc_modal_requests">
      <div className="vc_modal_requests_container">
        <div className="vc_modal_requests_container_title">
          <h1 className="vc_modal_requests_title">Solicitud</h1>
        </div>
        <div className="vc_modal_requests_close">
          <FaRegWindowClose onClick={vc_closeModalRequests} />
        </div>
        <p className="vc_modal_requests_subtitle">Quieren unirse:</p>

        {invitedUser ? (
          invitedUser.map((invited, index) => (
            <>
              {invited.tipo === 'Pending' ? (
                <div className="vc_modal_requests_travels_container">
                  <div className="vc_modal_requests_travel_partners">
                    <FaUser className="vc_modal_requests_user_icon" />
                    <div className="vc_modal_requests_user_information">
                      <span className="vc_modal_requests_user_name">{invited.id_usuario.nombre}</span>
                    </div>
                    <div className="vc_modal_requests_user_icons">
                        <FaCheckCircle onClick={() => onUpdate(invited._id)} className="vc_modal_requests_user_icon_1" />
                        <FaCircleXmark onClick={() => onDelete(invited._id)} className="vc_modal_requests_user_icon_2" />
                    </div>
                  </div>
                </div>
              ) : (<h1>No hay</h1>)}
            </>
          ))
        ) : (
          <p>No hay resultados</p>
        )}

        <button className="vc_modal_requests_button_accept" onClick={vc_closeModalRequests}>Hecho</button>
      </div>
    </div>
  );
};

V_chat_modal_requests.propTypes = {
  vc_closeModalRequests: PropTypes.func.isRequired,
};

export default V_chat_modal_requests;
