import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { FaPenToSquare, FaTrash } from "react-icons/fa6";
import ModalFormHoteles from "../../components/formDashboard/FormAgregar/Modal_hoteles_form";
import Navbar_dashboard from "../../components/navbar_dashboard";
import Sidebar_dashboard from "../../components/sidebar_dashboard";
import "../../styles/dashboard_styles/dashboards.css";

function DashboardHoteles() {
  const [showModal, setShowModal] = useState(false);
  const [list, setList] = useState([]);
  const [places, setPlaces] = useState([]);

  const handleUsuarioClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const fetchApi = async () => {
    try {
      const response = await axios.get("http://localhost:3000/hotels");
      if (response.status === 200) {
        const responseJSON = await response.data;
        setList(responseJSON);
      } else {
        console.error("Error", response.status);
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Error con los datos",
        icon: "error",
      });
    }
  };

  const fetchPlaces = async () => {
    try {
      const response = await axios.get("http://localhost:3000/places");
      if (response.status === 200) {
        const responseJSON = await response.data;
        setPlaces(responseJSON);
      } else {
        console.error("No encontre lugares", response.status);
      }
    } catch (error) {
      console.error("No encontre lugares", error);
    }
  };

  const ParaEliminar = async (_id) => {
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
        deleteHotel(_id);
      }
    });
  };

  const deleteHotel = async (_id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/hotels/${_id}`
      );
      if (response.status === 200) {
        Swal.fire({
          title: "Dato eliminado",
          confirmButtonColor: "green",
          confirmButtonText: "OK",
        });
        fetchApi();
      } else {
        console.error("Error eliminando", response.status);
      }
    } catch (error) {
      console.error("Error eliminando dato", error);
    }
  };

  useEffect(() => {
    fetchApi();
    fetchPlaces();
  }, []);

  return (
    <>
      <Navbar_dashboard />
      <Sidebar_dashboard />

      <h1 style={{ textAlign: "center", marginLeft: "14%" }}>Hoteles</h1>
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
      <ModalFormHoteles
        show={showModal}
        onClose={closeModal}
        fetchApi={fetchApi}
      />
      <section className="ContenedorTabla">
        <table id="dataTable" className="table">
          <thead className="estilos_th">
            <tr className="estilo-tr">
              <th className="table-header">ID hotel</th>
              <th className="table-header">Lugar de ubicacion</th>
              <th className="table-header">Nombre</th>
              <th className="table-header">Descripción</th>
              <th className="table-header">Direccion</th>
              <th className="table-header">Telefono</th>
              <th className="table-header">Correo</th>
              <th className="table-header">Presupuesto</th>
              <th className="table-header">Acciones</th>
            </tr>
          </thead>
          <tbody className="estilos_tbody">
            {Array.isArray(list) ? (
              list.map((hotel, index) => {
                const lugar = places.find(
                  (place) => place._id === hotel.lugar_id
                );
                return (
                  <tr key={index}>
                    <td className="style-td">{hotel._id}</td>
                    <td className="style-td">
                      {lugar ? lugar.nombre : "NO tiene lugar"}
                    </td>
                    <td className="style-td">{hotel.nombre}</td>
                    <td className="style-td">{hotel.descripcion}</td>
                    <td className="style-td">{hotel.direccion}</td>
                    <td className="style-td">{hotel.telefono}</td>
                    <td className="style-td">{hotel.email}</td>
                    <td className="style-td">{hotel.presupuesto}</td>
                    <td className="style-td">
                      <div className="align_icon">
                        <button className="edit">
                          <FaPenToSquare />
                        </button>
                        <button
                          className="delete"
                          onClick={() => ParaEliminar(hotel._id)}
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

export default DashboardHoteles;
