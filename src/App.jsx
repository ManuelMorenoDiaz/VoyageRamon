
import 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Dashboard Admin
import DashboardPlaces from './views/admin/dashboard-places';
import DashboardHoteles from './views/admin/dashboard-hotels';
import DashboardUsuarios from './views/admin/dashboard-users';
import DashboardPublicaciones from './views/admin/dashboard-posts';
import DashboardCategorias from './views/admin/dashboard-categories';

import RegistroLogin from './views/viewRegisterLogin';

import Home from './views/user/home';
import Travels from './views/user/travels'
import Places from './views/user/places';
import People from './views/user/people';
import Profile from './views/user/profile';
import Chat from './views/user/Chat';
import Categories from './views/user/Categories';
import Hotels from './views/user/Hotels';


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/admin_lugares" element={<DashboardPlaces />} />
          <Route path="/admin_hoteles" element={<DashboardHoteles />} />
          <Route path="/admin_usuarios" element={<DashboardUsuarios />} />
          <Route path="/admin_publicaciones" element={<DashboardPublicaciones />} />
          <Route path="/admin_categorias" element={<DashboardCategorias />} />

          <Route path="/ingresar" element={<RegistroLogin/>} />

          <Route path="/travels" element={<Travels />} />
          <Route path="/places" element={<Places />} />
          <Route path="/people" element={<People />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/categories/:idC" element={<Categories />} />
          <Route path="/Hotels/:idH" element={<Hotels />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
