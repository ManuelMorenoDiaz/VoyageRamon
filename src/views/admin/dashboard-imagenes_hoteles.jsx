import Navbar_dashboard from "../../components/navbar_dashboard";
import Sidebar_dashboard from "../../components/sidebar_dashboard";
import "../../styles/dashboard_styles/dashboards.css";
import Swal from "sweetalert2";
import ModalFormImagenesHotels from "../../components/formDashboard/FormAgregar/Modal_imagenesHotels";
import { getImgHotelsRequest, DeleteImgHotelsRequest } from "../../api/travels";
import { useEffect, useState } from "react";
import { FaPenToSquare, FaTrash } from "react-icons/fa6";

function DashboardImagenesHotels() {
  const [showModal, setShowModal] = useState(false);
  const [list, setList] = useState([]);

  const handleUsuarioClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const getImgHotels = async () => {
    try {
      const response = await getImgHotelsRequest();
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
        deleteImgHotels(_id);
      }
    });
  };

  const deleteImgHotels = async (_id) => {
    try {
      const response = await DeleteImgHotelsRequest(_id);
      if (response.status === 200) {
        Swal.fire({
          title: "Dato eliminado",
          confirmButtonColor: "green",
          confirmButtonText: "OK",
        });
        getImgHotels();
      } else {
        console.error("Error eliminando", response.status);
      }
    } catch (error) {
      console.error("Error eliminando dato", error);
    }
  };

  useEffect(() => {
    getImgHotels();
  }, []);

  return (
    <>
      <Navbar_dashboard />
      <Sidebar_dashboard />

      <h1 style={{ textAlign: "center", marginLeft: "14%" }}>Imagenes de Hoteles</h1>
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
      <ModalFormImagenesHotels
        show={showModal}
        onClose={closeModal}
        fetchApi={getImgHotels}
      />
      <section className="ContenedorTabla">
        <table id="dataTable" className="table">
          <thead className="estilos_th">
            <tr className="estilo-tr">
              <th className="table-header">Nombre imagen</th>
              <th className="table-header">Imagen</th>
              <th className="table-header">Nombre hoteles</th>
              <th className="table-header">Acciones</th>
            </tr>
          </thead>
          <tbody className="estilos_tbody">
            {Array.isArray(list) ? (
              list.map((images_hotels, index) => {
                const id_imagen = images_hotels.id_imagen;
                const id_hotel = images_hotels.id_hotel;

                return (
                  <tr key={index}>
                    <td className="style-td">{id_imagen.nombre}</td>
                    <td className="style-td">
                      <img src={id_imagen.imagen_link} alt={id_imagen.nombre} style={{ width: '90px', height: '90px' }} />
                    </td>
                    <td className="style-td">{id_hotel ? id_hotel.nombre : 'No tiene lugar'}</td>
                    <td className="style-td">
                      <div className="align_icon">
                        <button className="edit">
                          <FaPenToSquare />
                        </button>
                        <button
                          className="delete"
                          onClick={() => ParaEliminar(images_hotels._id)}
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

export default DashboardImagenesHotels;
