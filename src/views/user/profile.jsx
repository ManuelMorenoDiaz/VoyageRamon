import "../../styles/profile.css";
import Nav from "../../components/nav-bar";
import Footer from "../../components/footer";
import {FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useForm } from "react-hook-form";
import axios from 'axios';
import Swal from "sweetalert2";
import EstadosMexico from "../../components/estados_mexico";
import { useEffect } from "react";

function Profile() {

  const [EditarUser, setEditarUser] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const { logout, user } = useAuth();
  const [estadoSeleccionado, setEstadoSeleccionado] = useState(user.estado_republica);

  const { handleSubmit } = useForm();
  const [editedUserData, setEditedUserData] = useState({
    nombre: user.nombre,
    apellido_paterno: user.apellido_paterno,
    apellido_materno: user.apellido_materno,
    email: user.email,
    imagen: user.imagen,
    estado_republica: user.estado_republica,
    password: user.password,
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = handleSubmit(() => {
    logout();
  });

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const [userImage, setUserImage] = useState(null);

  useEffect(() => {
    const fetchUserImage = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/routes/users/${user._id}`);
        setUserImage(response.data.imagen);
      } catch (error) {
        console.error('Error al obtener la imagen del usuario:', error);
      }
    };

    fetchUserImage();
  }, [user._id]);

  const [userEstado, setuserEstado] = useState(null);

  useEffect(() => {
    const fetchuserEstado = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/routes/users/${user._id}`);
        setuserEstado(response.data.estado_republica);
      } catch (error) {
        console.error('Error al obtener la imagen del usuario:', error);
      }
    };

    fetchuserEstado();
  }, [user._id]);

  const updateUserProfile = async () => {
    try {
      const imageData = editedUserData.imagen ? { imagen: editedUserData.imagen } : {};

      await axios.put(`http://localhost:3000/routes/users/${user._id}`, {
        ...editedUserData,
        ...imageData,
      });

      setEditarUser(false);
      Swal.fire({
        icon: 'success',
        title: 'Perfil actualizado',
      });

      // Recarga los datos del usuario después de la actualización
      const getUserResponse = await axios.get(`http://localhost:3000/routes/users/${user._id}`);
      const updatedUser = getUserResponse.data;
      setEditedUserData({ ...editedUserData, imagen: updatedUser.imagen });
    } catch (error) {
      console.error('Error al actualizar el perfil:', error);
    }
  };

  return (
    <>
      <Nav />
      <div className="profile-content">

        <section className="cont-profile">
          <div className="info_profile">
            <div className="img_stars">
              {userImage && <img className="img_profile" src={userImage} alt="Imagen de perfil" />}
              <div>

                <input
                  id="imagenPerfilInput"
                  readOnly={!EditarUser}
                  className="inputs-datos"
                  type="text"
                  placeholder="Ingrese la URL de la imagen"
                  value={editedUserData.imagen || ''}
                  onChange={(e) => setEditedUserData({ ...editedUserData, imagen: e.target.value })}
                />
              </div>
            </div>
            <div>
              <section className="inputs_info">
                <div>
                  <span>
                    Nombre <br />
                  </span>
                  <input
                    id="nombreInput"
                    readOnly={!EditarUser}
                    className="inputs-datos"
                    type="text"
                    placeholder={user.nombre}
                    onChange={(e) => setEditedUserData({ ...editedUserData, nombre: e.target.value })}
                  />
                </div>
                
                <div>
                  <span>
                    Estado de la republica <br />
                  </span>
                  <select
                    required
                    className="inputs-datos"
                    name="estado_republica"
                    value={estadoSeleccionado}
                    onChange={(e) => {
                      setEstadoSeleccionado(e.target.value);
                      setEditedUserData({ ...editedUserData, estado_republica: e.target.value });
                    }}
                    defaultValue={userEstado}
                    disabled={!EditarUser}
                  >

                    {EstadosMexico.map((estado, index) => (
                      <option key={index} value={estado.value} >
                        {estado.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <span>
                    Apellido paterno <br />
                  </span>
                  <input
                    id="apellidoPaternoInput"
                    readOnly={!EditarUser}
                    className="inputs-datos"
                    type="text"
                    placeholder={user.apellido_paterno}
                    onChange={(e) => setEditedUserData({ ...editedUserData, apellido_paterno: e.target.value })}
                  />
                </div>
                <div>
                  <span>
                    Email <br />
                  </span>
                  <input
                    id="emailInput"
                    readOnly={!EditarUser}
                    className="inputs-datos"
                    type="email"
                    placeholder={user.email}
                    onChange={(e) => setEditedUserData({ ...editedUserData, email: e.target.value })}
                  />
                </div>
                <div>
                  <span>
                    Apellido materno <br />
                  </span>
                  <input
                    id="apellidoMaternoInput"
                    readOnly={!EditarUser}
                    className="inputs-datos"
                    type="text"
                    placeholder={user.apellido_materno}
                    onChange={(e) => setEditedUserData({ ...editedUserData, apellido_materno: e.target.value })}
                  />
                </div>
                <div>
                  <span>
                    Contraseña <br />
                  </span>
                  <div className="align-pass">
                    <input
                      id="passwordInput"
                      className="inputs-datos"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={password}
                      onChange={handlePasswordChange}
                      placeholder="****"
                      readOnly={!EditarUser}
                    />
                    <FaEyeSlash
                      style={{ margin: "10px" }}
                      className={`eye-icon ${showPassword ? "visible" : ""}`}
                      onClick={togglePasswordVisibility}
                    ></FaEyeSlash>
                  </div>
                </div>
              </section>
            </div>
          </div>  
        </section>

        <div className="btns-editar_eliminar">
          <button
            onClick={() => {
              if (EditarUser) {
                updateUserProfile();
              }
              setEditarUser(!EditarUser);
            }}
            className="btn-editar"
            style={{ backgroundColor: EditarUser ? "#4CAF50" : "#9225AA" }}
          >
            {EditarUser ? "Guardar cambios" : "Editar información"}
          </button>
          <button onClick={onSubmit} className="btn-eliminar" style={{ backgroundColor: "#BF213E" }}>
            Cerrar sesion
          </button>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Profile;