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
import Cabecalho from "./components/cabecalho";
import FinalDaPagina from "./components/finalDaPagina";
import { services } from "./data/services";

function DicasWrapper() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const scrollTo = params.get("scrollTo") || undefined;
  return <PaginaDeDicas scrollTo={scrollTo} />;
}

function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">s
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/paginaInicial" element={<PaginaInicial />} />
        <Route path="/dicas" element={<DicasWrapper />} />
        <Route path="/servicos" element={<SecaoDeServicos />} />
        <Route path="/comofunciona" element={<ComoFunciona />} />

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
        <Route 
          path="/servicesgrid" 
          element={<ServicesGrid services={services} />} 
        />
        
        <Route path="*" element={<PaginaInicial />} />
      </Routes>
      <FinalDaPagina />
    </div>
  );
}

export default App;