import Navbar_dashboard from "../../components/navbar_dashboard";
import Sidebar_dashboard from "../../components/sidebar_dashboard";
import "../../styles/dashboard_styles/dashboards.css";
import Swal from "sweetalert2";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaPenToSquare, FaTrash } from "react-icons/fa6";

function DashboardImagenes() {
  // const [showModal, setShowModal] = useState(false);

  // const handleUsuarioClick = () => {
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  const url = "http://localhost:3000/routes/images/";

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

  return (
    <>
      <Navbar_dashboard />
      <Sidebar_dashboard />

      <h1 style={{ textAlign: "center", marginLeft: "14%" }}>Imagenes</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "35px",
        }}
      >
        <button className="form_add_datos" >
          Agregar
        </button>
      </div>
      {/* <ModalFormHoteles
        show={showModal}
        onClose={closeModal}
        fetchApi={fetchApi}
      /> */}
      <section className="ContenedorTabla">
        <table id="dataTable" className="table">
          <thead className="estilos_th">
            <tr className="estilo-tr">
              <th className="table-header">ID imagen</th>
              <th className="table-header">Nombre imagen</th>
              <th className="table-header">Imagen</th>
              <th className="table-header">Acciones</th>
            </tr>
          </thead>
          <tbody className="estilos_tbody">
             {Array.isArray(list) ? (
              list.map((images, index) => {
                return ( 
                  <tr key={index}>
                    <td className="style-td">{images._id}</td>
                    <td className="style-td">{images.nombre}</td>
                    <td className="style-td"><img src={images.imagen_link} alt="" /></td>
  
                    <td className="style-td">
                      <div className="align_icon">
                        <button className="edit">
                          <FaPenToSquare />
                        </button>
                        <button
                          className="delete"
                          
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

export default DashboardImagenes;
