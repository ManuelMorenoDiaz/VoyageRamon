import React, { useState, useEffect, useRef } from 'react';
import { io } from "socket.io-client";
import Nav from "../../components/nav-bar";
import "../../styles/chat.css";
import V_chat_modal_partners from "../../components/v_chat_modal_partners";
import V_chat_modal_requests from "../../components/v_chat_modal_requests";
import V_chat_modal_ftravel from "../../components/v_chat_modal_ftravel";
import { FaArrowLeft, FaPen, FaTrash, FaPaperPlane } from 'react-icons/fa';
import { useAuth } from '../../context/authContext';
import { useParams } from "react-router-dom";
import { getOnePost } from '../../api/travels';
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { updatePostsRequest } from '../../api/travels';

function Chat() {
  const {user} = useAuth()
  const { idP } = useParams();
  const [vcModalPartners, setvcModalPartners] = useState(false);
  const [vcModalRequests, setvcModalRequests] = useState(false);
  const [vcModalFTravel, setvcModalFTravel] = useState(false);
  const [datos, setdatos] = useState([])
  const [lugar, setLugar] = useState([])
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const socket = useRef();
  const navigate = useNavigate();

  const obtenerDatos = async () => {
    const res = await getOnePost(idP)
    setdatos(res.data)
    setLugar(res.data.lugar_id.nombre)
  };

  const fechaformateada = (date) => {
    const fecha = new Date(date);
    const year = fecha.getFullYear();
    const month = (fecha.getMonth() + 1).toString().padStart(2, "0");
    const day = fecha.getDate().toString().padStart(2, "0");
    return `${year}/${month}/${day}`;
  };


  useEffect(() => {
    obtenerDatos();

    // Agregar user._id y idP al objeto query al conectar con el servidor
    socket.current = io('http://localhost:3000', { query: { id: user._id, room: idP, name: user.nombre } });

    socket.current.on('receive message', (msg) => {
      const isReceived = msg.id != user._id;
      console.log("Actual",socket.current.id)
      setMessages((prevMessages) => [...prevMessages, {text: msg.text, name: msg.name, time: msg.time, isReceived }]);
    });

    return () => {
      socket.current.disconnect();
    };
  }, []);

  const handleFinish = async () => {
    Swal.fire({
      title: "Terminar",
      text: "Deseas terminar el viaje",
      icon: "question",
      showCancelButton: true,
      cancelButtonColor: "red",
      confirmButtonColor: "green",
      cancelButtonText: "No quiero",
      confirmButtonText: "Si quiero",
    }).then((result) => {
      const folioData = {
        estado: 'Finalizado'
      };

      if (result.isConfirmed) {
        handleSubmit(folioData);
        navigate(`/travels`)
      }
    });
  };

  const handleSubmit = (folio) => {

    console.log(folio);
    updatePostsRequest(idP, folio);
  };
  
const sendMessage = () => {
    if (message) {

      const date = new Date();
      const hours = date.getHours() % 12 || 12;
      const minutes = ('0' + date.getMinutes()).slice(-2);
      const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

      const time = `${hours}:${minutes} ${ampm}`;

      socket.current.emit('send message', { text: message, name: user.name, time, id: user._id});
      setMessage('');
  }
};


  return (
    <div>
      <Nav />
      <div className="v_chat_containers">
        <div className="v_chat_container_left">
          <div className="v_chat_container_icons_top">
            <Link to={`/travels`}>
              <FaArrowLeft  />
            </Link>
            <h1>{datos.titulo}</h1>
            <FaPen color="#13EF0A" />
            <FaTrash color="#E0342F" />
          </div>
          <div className="v_chat_container_inputs_left">
            <div className="v_chat_widers_inputs">
              <label className="v_chat_label_dv">
                Descripcion del viaje
                <textarea className="v_chat_input_description" value={datos.descripcion} readOnly ></textarea>
              </label>
              <label className="v_chat_label_ld">
                Lugar de destino
                <input type="text" className="v_chat_input_place" value={lugar} readOnly/>
              </label>
              <label className="v_chat_label_fv">
                Fecha del viaje
                <input className="v_chat_input_date" value={fechaformateada(datos.fecha)} readOnly />
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
                  value={datos.cantidad_personas}
                  readOnly
                />
              </label>
              <label className="v_chat_label_pp">
                Presupuesto propuesto
                <input
                  type="text"
                  name=""
                  id=""
                  className="v_chat_input_budget"
                  value={datos.presupuesto + "  $"}
                  readOnly
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
              onClick={() => handleFinish()}
            >
              Terminar viaje
            </button>
          </div>
        </div>
        <div className="v_chat_container_rigth">
          <div className="v_chat_container_inputs_rigth">
            {messages.map((message, i) => 
              message.isReceived ? (
                <div key={i} className="v_chat_message_received">
                  <span className='v_chat_message_name'>{message.name}</span>
                  {message.text}
                  <span className='v_chat_message_time'>{message.time}</span>
                </div>
              ) : (
                <div key={i} className="v_chat_message_sended">{message.text}

                  <span className='v_chat_message_time'>{message.time}</span>
                </div>
              )
            )}
          </div>
          
          <div className='v_chat_input_send_message_container'>
          <input 
            type="text" 
            className='v_chat_input_send_message_2' 
            placeholder='Enviar mensaje' 
            value={message} 
            onChange={({ target: { value } }) => setMessage(value)}

          />
            <button className="v_chat_button_send_message" onClick={()=> sendMessage()}>
              <FaPaperPlane color='#000'/>
            </button>
          </div>
 
        </div>
      </div>
      {vcModalPartners && (
        <V_chat_modal_partners
          vc_closeModalPartners={() => setvcModalPartners(false)}
          id_post={idP}
        />
      )}
      {vcModalRequests && (
        <V_chat_modal_requests
          vc_closeModalRequests={() => setvcModalRequests(false)}
          id_post={idP}
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
