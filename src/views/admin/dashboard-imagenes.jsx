import Navbar_dashboard from "../../components/navbar_dashboard";
import Sidebar_dashboard from "../../components/sidebar_dashboard";
import "../../styles/dashboard_styles/dashboards.css";

function DashboardImagenes() {
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
                  <th className="table-header">Imagen</th>
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
                    return (
                      <tr key={index}>
                        <td className="style-td">{hotel._id}</td>
                        <td className="style-td">{hotel.lugar_nombre}</td>
                        <td className="style-td">{hotel.nombre}</td>
                        <td className="style-td"><img style={{ width: "250px" }} src= {hotel.imagen}/> </td>
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

export default DashboardImagenes;
