import Navbar_dashboard from "../../components/navbar_dashboard";
import Sidebar_dashboard from "../../components/sidebar_dashboard";
import "../../styles/dashboard_styles/dashboards.css";
import { FaPenToSquare, FaTrash } from "react-icons/fa6";
import { useEffect, useState } from "react";
import ModalFormLugares from "../../components/formDashboard/FormAgregar/Modal_lugares_form";
import axios from "axios";
import Swal from "sweetalert2";

function DashboardPlaces() {
  const [categorias, setCategorias] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleUsuarioClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const url = "http://localhost:3000/places/";

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

  const handleDelete = async (_id) => {
    Swal.fire({
      title: "Eliminar",
      text: "Deseas eliminar el dato",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "green",
      confirmButtonText: "Si quierooo borrarlooo ",
      cancelButtonText: "No quieeroo",
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
        Swal.fire("El dato esta eliminado :(");
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

  const fetchCategorias = async () => {
    try {
      const response = await axios.get("http://localhost:3000/categories");
      if (response.status === 200) {
        const responseJSON = await response.data;
        setCategorias(responseJSON);
      } else {
        console.error("Error con las categorías:", response.status);
      }
    } catch (error) {
      console.error("Error al obtener categorías:", error);
    }
  };

  const obtenerTituloCategoria = (idCategoria) => {
    const categoria = categorias.find(
      (categoria) => categoria._id === idCategoria
    );
    return categoria ? categoria.titulo : "Categoría no encontrada";
  };

  useEffect(() => {
    fetchApi();
    fetchCategorias();
  }, []);
  return (
    <>
      <Navbar_dashboard />
      <Sidebar_dashboard />

      <h1 style={{ textAlign: "center", marginLeft: "14%" }}>Lugares</h1>
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
      <ModalFormLugares
        show={showModal}
        onClose={closeModal}
        fetchApi={fetchApi}
      />

      <section className="ContenedorTabla">
        <table id="dataTable" className="table">
          <thead className="estilos_th">
            <tr className="estilo-tr">
              <th className="table-header">ID</th>
              <th className="table-header">Nombre</th>
              <th className="table-header">Detalles</th>
              <th className="table-header">Catgoria id</th>
              <th className="table-header">Acciones</th>
            </tr>
          </thead>
          <tbody className="estilos_tbody">
            {Array.isArray(list) ? (
              list.map((lista, index) => (
                <tr key={index}>
                  <td className="style-td">{lista._id}</td>
                  <td className="style-td">{lista.nombre}</td>
                  <td className="style-td">{lista.detalles}</td>
                  <td className="style-td">
                    {obtenerTituloCategoria(lista.categoria_id)}
                  </td>
                  <td className="style-td">
                    <div className="align_icon">
                      <button className="edit">
                        <FaPenToSquare />
                      </button>
                      <button
                        className="delete"
                        onClick={() => handleDelete(lista._id)}
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

export default DashboardPlaces;
