import Navbar_dashboard from "../../components/navbar_dashboard";
import Sidebar_dashboard from "../../components/sidebar_dashboard";
import "../../styles/dashboard_styles/dashboards.css";
import Swal from "sweetalert2";
import ModalFormImagenesPlaces from "../../components/formDashboard/FormAgregar/Modal_imagenesPlaces";
import { getImgPlacesRequest, DeleteImgPlacesRequest } from "../../api/travels";
import { useEffect, useState } from "react";
import { FaPenToSquare, FaTrash } from "react-icons/fa6";

function DashboardImagenesPlaces() {
  const [showModal, setShowModal] = useState(false);
  const [list, setList] = useState([]);

  const handleUsuarioClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const getImgPlaces = async () => {
    try {
      const response = await getImgPlacesRequest();
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
        deleteImgPlaces(_id);
      }
    });
  };

  const deleteImgPlaces = async (_id) => {
    try {
      const response = await DeleteImgPlacesRequest(_id);
      if (response.status === 200) {
        Swal.fire({
          title: "Dato eliminado",
          confirmButtonColor: "green",
          confirmButtonText: "OK",
        });
        getImgPlaces();
      } else {
        console.error("Error eliminando", response.status);
      }
    } catch (error) {
      console.error("Error eliminando dato", error);
    }
  };

  useEffect(() => {
    getImgPlaces();
  }, []);

  return (
    <>
      <Navbar_dashboard />
      <Sidebar_dashboard />

      <h1 style={{ textAlign: "center", marginLeft: "14%" }}>Imagenes de lugares</h1>
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
      <ModalFormImagenesPlaces
        show={showModal}
        onClose={closeModal}
        fetchApi={getImgPlaces}
      />
      <section className="ContenedorTabla">
        <table id="dataTable" className="table">
          <thead className="estilos_th">
            <tr className="estilo-tr">
              <th className="table-header">Nombre imagen</th>
              <th className="table-header">Imagen</th>
              <th className="table-header">Nombre lugar</th>
              <th className="table-header">Acciones</th>
            </tr>
          </thead>
          <tbody className="estilos_tbody">
            {Array.isArray(list) ? (
              list.map((images_places, index) => {
                const id_imagen = images_places.id_imagen;
                const id_lugar = images_places.id_lugar;

                return (
                  <tr key={index}>
                    <td className="style-td">{id_imagen.nombre}</td>
                    <td className="style-td">
                      <img src={id_imagen.imagen_link} alt={id_imagen.nombre} style={{ width: '90px', height: '90px' }} />
                    </td>
                    <td className="style-td">{id_lugar ? id_lugar.nombre : 'No tiene lugar'}</td>
                    <td className="style-td">
                      <div className="align_icon">
                        <button className="edit">
                          <FaPenToSquare />
                        </button>
                        <button
                          className="delete"
                          onClick={() => ParaEliminar(images_places._id)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="8">Cargando...</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default DashboardImagenesPlaces;
