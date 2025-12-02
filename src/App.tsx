import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import PaginaInicial from "./components/paginaInicial";
import PaginaDeDicas from "./components/PaginaDeDicas";
import TelaDeCadastroGERAL from "./components/TelaDeCadastroGERAL";
import TelaDeLogin from "./components/TelaDeLogin";
import SecaoDeServicos from "./components/SecaoDeServicos";
import TabNavigation from "./components/TabNavigation";
import ServicesGrid from "./components/ServicesGrid";
import ComoFunciona from "./components/comoFunciona";
import FinalDaPagina from "./components/finalDaPagina";
import { services } from "./data/services";

// PERFIL
import TelaDePerfilLogin from "./components/TelaDePerfilLogin";
import EditarPerfil from "./components/EditarPerfil";

// MEI
import CadastroMei from "./components/CadastroMei"; // ✔ JÁ EXISTE NO SEU PROJETO

// POSTAGENS
import TelaDePostagens from "./components/TelaDePostagens";
import NovaPostagem from "./components/NovaPostagem";
import EditarPostagem from "./components/EditarPostagem";

function DicasWrapper() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const scrollTo = params.get("scrollTo") || undefined;
  return <PaginaDeDicas scrollTo={scrollTo} />;
}

function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>

        {/* PÁGINAS PRINCIPAIS */}
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/paginaInicial" element={<PaginaInicial />} />
        <Route path="/dicas" element={<DicasWrapper />} />
        <Route path="/servicos" element={<SecaoDeServicos />} />
        <Route path="/comoFunciona" element={<ComoFunciona />} />
        <>Route path="</>

        {/* CADASTRO / LOGIN */}
        <Route
          path="/cadastro"
          element={<TelaDeCadastroGERAL onVoltar={() => navigate("/")} />}
        />

        <Route
          path="/login"
          element={
            <TelaDeLogin
              onVoltar={() => navigate("/")}
              onCadastrar={() => navigate("/cadastro")}
            />
          }
        />

        {/* PERFIL */}
        <Route path="/perfil" element={<TelaDePerfilLogin />} />
        <Route path="/editar-perfil" element={<EditarPerfil />} />

        {/* MEI */}
        <Route path="/cadastro-mei" element={<CadastroMei />} />

        {/* SERVIÇOS (GRID) */}
        <Route
          path="/servicesgrid"
          element={<ServicesGrid services={services} />}
        />

        {/* ABA (SE PRECISAR MANTER) */}
        <Route
          path="/tab"
          element={
            <TabNavigation
              activeTab="services"
              setActiveTab={() => {}}
              selectedCategory="Todos"
              setSelectedCategory={() => {}}
            />
          }
        />

        {/* POSTAGENS */}
        <Route path="/postagens" element={<TelaDePostagens />} />
        <Route path="/nova-postagem" element={<NovaPostagem />} />
        <Route path="/editar-postagem/:id" element={<EditarPostagem />} />

        {/* FALLBACK */}
        <Route path="*" element={<PaginaInicial />} />
      </Routes>

      <FinalDaPagina />
    </div>
  );
}

export default App;
