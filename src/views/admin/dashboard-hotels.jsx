import Navbar_dashboard from '../../components/navbar_dashboard';
import Sidebar_dashboard from '../../components/sidebar_dashboard';
import '../../styles/dashboard_styles/dashboards.css'
import { FaPenToSquare, FaTrash } from "react-icons/fa6";
import { useEffect, useState } from 'react';

const acciones = [
    { icon: <FaPenToSquare />, className: 'edit' },
    { icon: <FaTrash />, className: 'delete' }
];

function DashboardHoteles() {

    const url = 'https://random-data-api.com/api/v2/users?size=50&is_xml=true';

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
                    <th className='table-header'>Nombre</th>
                    <th className='table-header'>Descripción</th>
                    <th className='table-header'>Direccion</th>
                    <th className='table-header'>Telefono</th>
                    <th className='table-header'>Correo</th>
                    <th className='table-header'>Acciones</th>
                </tr>
            </thead>
            <tbody className='estilos_tbody'>
                {Array.isArray(list) ? (
                    list.map((lista, index) => (
                        <tr key={index}>
                            <td className='style-td'>{lista.id}</td>
                            <td className='style-td'>{lista.address.city}</td>
                            <td className='style-td'>{lista.employment.title}</td>
                            <td className='style-td'>{lista.address.street_address}</td>
                            <td className='style-td'>{lista.phone_number}</td>
                            <td className='style-td'>{lista.email}</td>
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

export default DashboardHoteles;