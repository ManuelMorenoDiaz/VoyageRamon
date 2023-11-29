import Navbar_dashboard from "../../components/navbar_dashboard";
import Sidebar_dashboard from "../../components/sidebar_dashboard";
import "../../styles/dashboard_styles/dashboards.css";
import { FaPenToSquare, FaTrash } from "react-icons/fa6";
import { useEffect, useState } from "react";
import ModalFormUsers from "../../components/formDashboard/FormAgregar/Modal_users_form";
import axios from "axios";
import Swal from "sweetalert2";

function DashboardUsuarios() {
  const [showModal, setShowModal] = useState(false);

  const handleUsuarioClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const url = "http://localhost:3000/routes/users/";

  const [list, setList] = useState([]);

  const fetchApi = async () => {
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        const responseJSON = await response.data;
        setList(responseJSON);
      } else {
        Swal.fire({
          title: "Error!",
          text: "Error con los datos" + response.status,
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Error con los datos" + error,
        icon: "error",
      });
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const ParaEliminar = async (_id) => {
    Swal.fire({
      title: "Eliminar",
      text: "Deseas eliminar el dato?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "green",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteusuario(_id);
      }
    });
  };

  const deleteusuario = async (_id) => {
    try {
      const response = await axios.delete(`${url}${_id}`);
      if (response.status === 200) {
        Swal.fire({
          title: "Dato eliminado",
          confirmButtonColor: "green",
          confirmButtonText: "OK",
        });
        fetchApi();
      } else {
        Swal.fire({
          title: "Error!",
          text: "Error no se borro" + response.status,
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Error no se borro" + error,
        icon: "error",
      });
    }
  };

  return (
    <>
      <Navbar_dashboard />
      <Sidebar_dashboard />

      <h1 style={{ textAlign: "center", marginLeft: "14%" }}>Usuarios</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "35px",
        }}
      >
        <button className="form_add_datos" onClick={handleUsuarioClick}>
          Agregar
        </button>
      </div>
      <ModalFormUsers
        show={showModal}
        onClose={closeModal}
        fetchApi={fetchApi}
      />
      <section className="ContenedorTabla">
        <table id="dataTable" className="table">
          <thead className="estilos_th">
            <tr className="estilo-tr">
              <th className="table-header">ID</th>
              <th className="table-header">Nombres</th>
              <th className="table-header">Apellido Paterno</th>
              <th className="table-header">Apellido Materno</th>
              <th className="table-header">Email</th>
              <th className="table-header">Imagen</th>
              <th className="table-header">Estado</th>
              <th className="table-header">Rol</th>
              <th className="table-header">Acciones</th>
            </tr>
          </thead>
          <tbody className="estilos_tbody">
            {Array.isArray(list) ? (
              list.map((lista, index) => (
                <tr key={index}>
                  <td className="style-td">
                    <span style={{ fontSize: "12px" }}>{lista._id}</span>
                  </td>
                  <td className="style-td">{lista.nombre}</td>
                  <td className="style-td">{lista.apellido_paterno}</td>
                  <td className="style-td">{lista.apellido_materno}</td>
                  <td className="style-td">{lista.email}</td>
                  <td className="style-td">
                    <img style={{ width: "25%" }} src={lista.imagen} />
                  </td>
                  <td className="style-td">{lista.estado_republica}</td> 
                  <td className="style-td">{lista.role}</td>
                  <td className="style-td">
                    <div className="align_icon">
                      <button className="edit">
                        <FaPenToSquare />
                      </button>
                      <button
                        className="delete"
                        onClick={() => ParaEliminar(lista._id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Cargando...</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default DashboardUsuarios;
