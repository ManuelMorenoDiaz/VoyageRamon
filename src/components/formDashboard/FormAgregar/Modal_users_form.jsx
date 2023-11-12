import '../../../styles/modales_dashboard.css';
import Swal from 'sweetalert2'
import { useRef, useEffect } from "react";
import EstadosMexico from '../../../components/estados_mexico.jsx';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
function Modal_users_form({ show, onClose, fetchApi }) {
    const modalRef = useRef(null);

    // esto detecta los click que hay fuera del modal y lo cierra
    const ParaModal = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    useEffect(() => {
        if (show) {
            document.addEventListener("mousedown", ParaModal);
        } else {
            document.removeEventListener("mousedown", ParaModal);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show, onClose]);


    const handleSubmit = (event) => {
        event.preventDefault();


        const nombre = event.target.elements.nombre.value;
        const apellido_paterno = event.target.elements.apellido_paterno.value;
        const apellido_materno = event.target.elements.apellido_materno.value;
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        const calificacion = event.target.elements.calificacion.value;
        const imagen = event.target.elements.imagen.value;
        const estado_republica = event.target.elements.estado_republica.value;

        const data = {
            nombre,
            apellido_paterno,
            apellido_materno,
            email,
            password,
            calificacion,
            imagen,
            estado_republica
        };

        axios.post('http://localhost:3000/users/', data)
            .then(() => {
                Swal.fire({
                    title: "Usuario añadido",
                    icon: "success",
                    confirmButtonColor: "green",
                    confirmButtonText: "OK"
                });

                onClose();
                fetchApi();
            })
            .catch(error => {
                Swal.fire({
                    title: "Error",
                    text: "Error: " + error,
                    confirmButtonColor: "green",
                    confirmButtonText: "OK"
                });
                console.error('Error al añadir usuario:', error);
            });
    };


    if (!show) return null;

    return (
        <div className="modal_overlay">
            <div className="modal_content" ref={modalRef}>
                <form className='formulario_inputs_dashboard' onSubmit={handleSubmit}>
                    <label>Nombre</label>
                    <input required maxLength="40" className='inputs_datos_dashboard' name='nombre' type="text" />
                    <br />
                    <label>Apellido paterno</label>
                    <input required maxLength="40" className='inputs_datos_dashboard' name='apellido_paterno' type="text" />
                    <br />
                    <label>Apellido materno</label>
                    <input maxLength="40" className='inputs_datos_dashboard' name='apellido_materno' type="text" />
                    <br />
                    <label>Email</label>
                    <input maxLength="100" required className='inputs_datos_dashboard' name='email' type="email" />
                    <br />
                    <label>Contraseña</label>
                    <input required maxLength="255" className='inputs_datos_dashboard' name='password' type="password" />
                    <br />
                    <label>Calificacion</label>
                    <select required className='inputs_datos_dashboard' name='calificacion'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <br />
                    <label>Imagen</label>
                    <input maxLength="255" className='inputs_datos_dashboard' name='imagen' type="text" />
                    <br />
                    <label>Estado</label>
                    <select required className='inputs_datos_dashboard' name="estado_republica">
                        <option value="">Seleccionar Estado</option> 
                        {EstadosMexico.map((estado, index) => (
                            <option key={index} value={estado.value}>
                                {estado.label}
                            </option>
                        ))}
                    </select>
                    <button type="submit">Añadir :V</button>
                </form>
            </div>
        </div>
    );
}


export default Modal_users_form;
