import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import { AuthProvider } from "../src/context/authContext.jsx";
//Dashboard Admin
import DashboardPlaces from "./views/admin/dashboard-places";
import DashboardHoteles from "./views/admin/dashboard-hotels";
import DashboardUsuarios from "./views/admin/dashboard-users";
import DashboardPublicaciones from "./views/admin/dashboard-posts";
import DashboardCategorias from "./views/admin/dashboard-categories";
import DashboardImagenesLugares from "./views/admin/dashboard-imagenes_lugares";
import DashboardImagenesHoteles from "./views/admin/dashboard-imagenes_hoteles";

import ProtectedRoutes from "./middlewares/protectedRoutes.jsx";
import AdminRoutes from "./middlewares/adminRoutes.jsx";

import RegistroLogin from "./views/viewRegisterLogin";

import Home from "./views/user/home";
import Travels from "./views/user/travels";
import Places from "./views/user/places";
import People from "./views/user/people";
import Profile from "./views/user/profile";
import Chat from "./views/user/chat";
import Categories from "./views/user/categories.jsx";
import Place from "./views/user/place.jsx";
import Hotels from "./views/user/hotels";

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <DataProvider>
          <Router>
            <Routes>
              <Route path="/ingresar" element={<RegistroLogin />} />

              <Route element={<ProtectedRoutes />}>
                <Route element={<AdminRoutes />}>
                  <Route 
                    path="/admin_lugares" 
                    element={<DashboardPlaces />} 
                  />
                  <Route 
                    path="/admin_hoteles" 
                    element={<DashboardHoteles />} />
                  <Route
                    path="/admin_usuarios"
                    element={<DashboardUsuarios />}
                  />
                  <Route
                    path="/admin_publicaciones"
                    element={<DashboardPublicaciones />}
                  />
                  <Route
                    path="/admin_categorias"
                    element={<DashboardCategorias />}
                  />
                  <Route path="/admin_imagenes"
                    element={<DashboardImagenesLugares />}>
                  </Route>
                  <Route path="/admin_imagenes_places"
                    element={<DashboardImagenesLugares />}>
                  </Route>
                  <Route path="/admin_imagenes_hoteles"
                    element={<DashboardImagenesHoteles />}>
                  </Route>
                  
                </Route>
                
                <Route path="/profile" element={<Profile />} />
                <Route path="/travels" element={<Travels />} />
                <Route path="/chat/:idP" element={<Chat />} />
                <Route path="/places" element={<Places />} />
                <Route path="/places/:idP" element={<Place />} />
                <Route path="/people" element={<People />} />
                <Route path="/categories/:idC" element={<Categories />} />
                <Route path="/hotels/:idH" element={<Hotels />} />
              </Route>


              <Route path="/" exact element={<Home />} />
            </Routes>
          </Router>
        </DataProvider>
      </div>
    </AuthProvider>
  );
}
export default App;
