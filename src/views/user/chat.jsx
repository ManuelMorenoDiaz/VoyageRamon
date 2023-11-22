import { useState } from "react";
import Nav from "../../components/nav-bar";
import "../../styles/chat.css";
import V_chat_modal_partners from "../../components/v_chat_modal_partners";
import V_chat_modal_requests from "../../components/v_chat_modal_requests";
import V_chat_modal_ftravel from "../../components/v_chat_modal_ftravel";
import { FaArrowLeft, FaPen, FaTrash } from "react-icons/fa";

function Chat() {
  const [vcModalPartners, setvcModalPartners] = useState(false);
  const [vcModalRequests, setvcModalRequests] = useState(false);
  const [vcModalFTravel, setvcModalFTravel] = useState(false);

  return (
    <div>
      <Nav />
      <div className="v_chat_containers">
        <div className="v_chat_container_left">
          <div className="v_chat_container_icons_top">
            <FaArrowLeft />
            <h1>Viaje a Cancun</h1>
            <FaPen color="#13EF0A" />
            <FaTrash color="#E0342F" />
          </div>
          <div className="v_chat_container_inputs_left">
            <div className="v_chat_widers_inputs">
              <label className="v_chat_label_dv">
                Descripcion del viaje
                <textarea className="v_chat_input_description"></textarea>
              </label>
              <label className="v_chat_label_ld">
                Lugar de destino
                <input type="text" className="v_chat_input_place" />
              </label>
              <label className="v_chat_label_fv">
                Fecha del viaje
                <input type="date" className="v_chat_input_date" />
              </label>
            </div>
            <div className="v_chat_dual_inputs">
              <label className="v_chat_label_lp">
                Limite de personas
                <input
                  type="text"
                  name=""
                  id=""
                  className="v_chat_input_limit"
                />
              </label>
              <label className="v_chat_label_pp">
                Presupuesto propuesto
                <input
                  type="text"
                  name=""
                  id=""
                  className="v_chat_input_budget"
                />
              </label>
              <button
                className="v_chat_button_partners"
                onClick={() => setvcModalPartners(true)}
              >
                Compañeros
              </button>
              <button
                className="v_chat_button_requests"
                onClick={() => setvcModalRequests(true)}
              >
                Solicitudes
              </button>
            </div>
            <button
              className="v_chat_button_finish_travel"
              onClick={() => setvcModalFTravel(true)}
            >
              Terminar viaje
            </button>
          </div>
        </div>
        <div className="v_chat_container_rigth">
          <div className="v_chat_container_inputs_rigth">
            <div className="v_chat_message_received">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non,
              rerum perferendis! Similique natus quam impedit, numquam nesciunt
              vitae sapiente repellendus reiciendis, laudantium ipsa ab, nisi
              officia voluptas deserunt voluptatem ipsam!
            </div>
            <div className="v_chat_message_received">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non,
              rerum perferendis! Similique natus quam impedit, numquam nesciunt
              vitae sapiente repellendus reiciendis, laudantium ipsa ab, nisi
              officia voluptas deserunt voluptatem ipsam!
            </div>
            <div className="v_chat_message_received">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non,
              rerum perferendis! Similique natus quam impedit, numquam nesciunt
              vitae sapiente repellendus reiciendis, laudantium ipsa ab, nisi
              officia voluptas deserunt voluptatem ipsam!
            </div>
            <div className="v_chat_message_sended">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
              minus, perspiciatis enim sunt eos at architecto non nulla,
              reprehenderit labore ducimus ratione, tenetur expedita aspernatur
              repellendus perferendis aliquid pariatur magni!
            </div>
            <div className="v_chat_message_sended">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
              minus, perspiciatis enim sunt eos at architecto non nulla,
              reprehenderit labore ducimus ratione, tenetur expedita aspernatur
              repellendus perferendis aliquid pariatur magni!
            </div>
          </div>
          <input
            type="text"
            className="v_chat_input_send_message"
            placeholder="Enviar mensaje"
          />
        </div>
      </div>
      {vcModalPartners && (
        <V_chat_modal_partners
          vc_closeModalPartners={() => setvcModalPartners(false)}
        />
      )}
      {vcModalRequests && (
        <V_chat_modal_requests
          vc_closeModalRequests={() => setvcModalRequests(false)}
        />
      )}
      {vcModalFTravel && (
        <V_chat_modal_ftravel
          vc_closeModalFTravel={() => setvcModalFTravel(false)}
        />
      )}
    </div>
  );
}

export default Chat;
