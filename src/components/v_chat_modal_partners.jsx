import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/components_styles/chat_modal.css";
import { FaRegWindowClose, FaUser } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { getUser_PostRequest, deleteUser_PostRequest  } from "../api/user_post"

const V_chat_modal_partners = ({ vc_closeModalPartners, id_post }) => {

  const [invitedUser, setInvitedUser] = useState()

  const fetchUserPost = async () => {
    try {

      const post = {"post_id": id_post}

      const response = await getUser_PostRequest(post);

      const invitados = response.data.filter(
        (invited) => invited.tipo === "Participant"
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

  return (
    <div className="vc_modal_partners">
      <div className="vc_modal_partners_container">
        <div className="vc_modal_partners_container_title">
          <h1 className="vc_modal_partners_title">Compartir</h1>
        </div>
        <div className="vc_modal_partners_close">
          <FaRegWindowClose onClick={vc_closeModalPartners} />
        </div>
        <p className="vc_modal_partners_subtitle">Compañeros de viaje</p>

        {invitedUser ? (
          invitedUser.map((invited) => (
            <>
              {invited.tipo === 'Participant' ? (
                <div className="vc_modal_partners_travels_container">
                <div className="vc_modal_partners_travel_partners">
                  <FaUser className="vc_modal_partners_user_icon" />
                  <div className="vc_modal_partners_user_information">
                    <span className="vc_modal_partners_user_name">{invited.id_usuario.nombre}</span>
                    <span className="vc_modal_partners_user_email">
                    {invited.id_usuario.email}
                    </span>
                  </div>
                  <div className="vc_modal_requests_user_icons">
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
        <button className="vc_modal_partners_button_accept" onClick={vc_closeModalPartners} >Hecho</button>
      </div>
    </div>
  );
};

V_chat_modal_partners.propTypes = {
  vc_closeModalPartners: PropTypes.func.isRequired,
};

export default V_chat_modal_partners;
