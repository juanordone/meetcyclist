import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";

import Bienvenida from "./views/Bienvenida/Bienvenida";
import InicioSesion from "./views/InicioSesion/InicioSesion";
import Home from "./views/Home/Home";
import Layout from "./components/Layout/Layout";
import { AuthContextProvider } from "./AuthContext/AuthContext";
import SubirRuta from "./views/SubirRuta/SubirRuta";
import DetallesRuta from "./views/DetallesRuta/DetallesRuta";
import DetallesUsuario from "./views/DetallesaUsuario/DetallesUsuario";
import ScrollToTop from "../ScrollToTop";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="iniciosesion" element={<InicioSesion />} />
          <Route index element={<Bienvenida />} />

          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="subirRuta/:id" element={<SubirRuta />} />
            <Route path="detallesRuta/:id" element={<DetallesRuta />} />
            <Route path="perfil/:id" element={<DetallesUsuario />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
