import React, { useState, useEffect, useRef } from 'react';
import { io } from "socket.io-client";
import Nav from "../../components/nav-bar";
import "../../styles/chat.css";
import V_chat_modal_partners from "../../components/v_chat_modal_partners";
import V_chat_modal_requests from "../../components/v_chat_modal_requests";
import V_chat_modal_ftravel from "../../components/v_chat_modal_ftravel";
import { FaArrowLeft, FaPen, FaTrash, FaPaperPlane } from 'react-icons/fa';

function Chat() {
  const [vcModalPartners, setvcModalPartners] = useState(false);
  const [vcModalRequests, setvcModalRequests] = useState(false);
  const [vcModalFTravel, setvcModalFTravel] = useState(false);

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const socket = useRef();

  useEffect(() => {
    socket.current = io('http://localhost:3000');
    socket.current.on('receive message', (msg) => {
      const isReceived = msg.id !== socket.current.id;
      setMessages((prevMessages) => [...prevMessages, { text: msg.text, time: msg.time ,isReceived }]);
    });
    return () => {
      socket.current.disconnect();
    };
  }, []);
  
  const sendMessage = (event) => {
    if(event.key === 'Enter' && message) {
      event.preventDefault();
      let date = new Date();
      let hours = date.getHours();
      let minuts = date.getMinutes();
      let ampm = hours >= 12 ? 'PM' : 'AM';

      hours = hours % 12;
      hours = hours ? hours : 12;
      minuts = minuts < 10 ? '0'+minuts : minuts;

      let time = hours + ':' + minuts + ' ' + ampm;

      socket.current.emit('send message', { text: message, time });
      setMessage('');
    }
  };

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
            {messages.map((message, i) => 
              message.isReceived ? (
                <div key={i} className="v_chat_message_received">{message.text}
                  <span className='v_chat_message_time'>{message.time}</span>
                </div>
              ) : (
                <div key={i} className="v_chat_message_sended">{message.text}
                  <span className='v_chat_message_time'>{message.time}</span>
                </div>
              )
            )}
          </div>
          <input 
            type="text" 
            className='v_chat_input_send_message' 
            placeholder='Enviar mensaje' 
            value={message} 
            onChange={({ target: { value } }) => setMessage(value)}
            onKeyDown={sendMessage}
          />
          <button className="v_chat_button_send_message" onClick={sendMessage}>
            <FaPaperPlane color='#000'/>
          </button>
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
