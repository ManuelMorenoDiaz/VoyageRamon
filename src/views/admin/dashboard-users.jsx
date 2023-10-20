import Navbar_dashboard from '../../components/navbar_dashboard';
import Sidebar_dashboard from '../../components/sidebar_dashboard';
import '../../styles/dashboard_styles/dashboards.css'
import { FaPenToSquare, FaTrash } from "react-icons/fa6";
import { useEffect, useState } from 'react';

const acciones = [
  { icon: <FaPenToSquare />, className: 'edit' },
  { icon: <FaTrash />, className: 'delete' }
];

function DashboardUsuarios() {
  const url = 'https://random-data-api.com/api/v2/users?size=15&is_xml=true';

  const [list, setList] = useState([]);

  const fetchApi = async () => {
    try {
      const response = await fetch(url);
      console.log(response.status);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseJSON = await response.json();
      console.log(responseJSON);
      setList(responseJSON);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchApi();
  }, [])
  return (
    <>
      <Navbar_dashboard />
      <Sidebar_dashboard />

      <h1 style={{ textAlign: "center", marginLeft: "14%" }}>Hoteles</h1>
      <section className='ContenedorTabla'>
        <table id="dataTable" className="table">
          <thead className='estilos_th'>
            <tr className='estilo-tr'>
              <th className='table-header'>ID</th>
              <th className='table-header'>Nombres</th>
              <th className='table-header'>Apellido Paterno</th>
              <th className='table-header'>Apellido Materno</th>
              <th className='table-header'>Email</th>
              <th className='table-header'>Contraseña</th>
              <th className='table-header'>Calificacion</th>
              <th className='table-header'>Imagen</th>
              <th className='table-header'>Estado</th>
              <th className='table-header'>Acciones</th>
            </tr>
          </thead>
          <tbody className='estilos_tbody'>
            {Array.isArray(list) ? (
              list.map((lista, index) => (
                <tr key={index}>
                  <td className='style-td'>{lista.id}</td>
                  <td className='style-td'>{lista.first_name}</td>
                  <td className='style-td'>{lista.last_name}</td>
                  <td className='style-td'>{lista.last_name}</td>
                  <td className='style-td'>{lista.email}</td>
                  <td className='style-td'><span>***********</span></td>
                  <td className='style-td'><span>4</span></td>
                  <td className='style-td'><img style={{width:'25%'}} src={lista.avatar}/></td>
                  <td className='style-td'>{lista.address.state}</td>
                  <td className='style-td'>
                    <div className="align_icon">
                      {acciones.map((accion, index) => (
                        <button className={accion.className} key={index}>
                          {accion.icon}
                        </button>
                      ))}
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
  )
}

export default DashboardUsuarios