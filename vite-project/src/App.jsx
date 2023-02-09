import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";

import Bienvenida from "./views/Bienvenida/Bienvenida";
import InicioSesion from "./views/InicioSesion/InicioSesion";
import Home from "./views/Home/Home";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Bienvenida />} />
          <Route path="iniciosesion" element={<InicioSesion />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
