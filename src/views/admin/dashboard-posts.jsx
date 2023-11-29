import Navbar_dashboard from "../../components/navbar_dashboard";
import Sidebar_dashboard from "../../components/sidebar_dashboard";
import "../../styles/dashboard_styles/dashboards.css";
import { FaPenToSquare, FaTrash } from "react-icons/fa6";
import { useEffect, useState } from "react";
import ModalFormPosts from "../../components/formDashboard/FormAgregar/Modal_posts_form.jsx";
import axios from "axios";
import Swal from "sweetalert2";

function DashboardPublicaciones() {
  const [lugares, setLugares] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleUsuarioClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const url = "http://localhost:3000/routes/posts/";
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
        deletedato(_id);
      }
    });
  };

  const deletedato = async (_id) => {
    try {
      const response = await axios.delete(`${url}${_id}`);
      if (response.status === 200) {
        Swal.fire("El dato esta eliminado");
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

  const fetchLugares = async () => {
    try {
      const response = await axios.get("http://localhost:3000/routes/places/");
      if (response.status === 200) {
        const responseJSON = await response.data;
        setLugares(responseJSON);
      } else {
        console.error("Error al obtener lugares:", response.status);
      }
    } catch (error) {
      console.error("Error al obtener lugares:", error);
    }
  };

  const obtenerNombreLugar = (lugarId) => {
    const lugar = lugares.find((l) => l._id === lugarId);
    return lugar ? lugar.nombre : "Lugar no encontrado";
  };

  useEffect(() => {
    fetchApi();
    fetchLugares();
  }, []);

  return (
    <>
      <Navbar_dashboard />
      <Sidebar_dashboard />

      <h1 style={{ textAlign: "center", marginLeft: "14%" }}>Publicaciones</h1>
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
      <ModalFormPosts
        show={showModal}
        onClose={closeModal}
        fetchApi={fetchApi}
      />
      <section className="ContenedorTabla">
        <table id="dataTable" className="table">
          <thead className="estilos_th">
            <tr className="estilo-tr">
              <th className="table-header">ID</th>
              <th className="table-header">Lugar</th>
              <th className="table-header">Titulo</th>
              <th className="table-header">Descripcion</th>
              <th className="table-header">Cantidad personas</th>
              <th className="table-header">Fecha</th>
              <th className="table-header">Presupuesto</th>
              <th className="table-header">Estado</th>
              <th className="table-header">Acciones</th>
            </tr>
          </thead>
          <tbody className="estilos_tbody">
            {Array.isArray(list) ? (
              list.map((lista, index) => (
                <tr key={index}>
                  <td className="style-td">{lista._id}</td>
                  <td className="style-td">
                    {obtenerNombreLugar(lista.lugar_id)}
                  </td>
                  <td className="style-td">{lista.titulo}</td>
                  <td className="style-td">{lista.descripcion}</td>
                  <td className="style-td">{lista.cantidad_personas}</td>
                  <td className="style-td">{lista.fecha}</td>
                  <td className="style-td">{lista.presupuesto}</td>
                  <td className="style-td">{lista.estado}</td>
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

export default DashboardPublicaciones;
