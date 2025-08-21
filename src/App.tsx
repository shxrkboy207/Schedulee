import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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

function DicasWrapper() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const scrollTo = params.get("scrollTo") || undefined;
  return <PaginaDeDicas scrollTo={scrollTo} />;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<PaginaInicial />} />
      <Route path="/dicas" element={<DicasWrapper />} />
      <Route path="/cadastro" element={<TelaDeCadastroGERAL onVoltar={() => window.location.href = "/"} />} />
      <Route path="/login" element={<TelaDeLogin onVoltar={() => window.location.href = "/"} />} />
      <Route path="/servicos" element={<SecaoDeServicos />} />
      <Route path="/tab" element={<TabNavigation activeTab="services" setActiveTab={() => {}} selectedCategory="Todos" setSelectedCategory={() => {}} />} />
      <Route path="/servicesgrid" element={<ServicesGrid services={[]} />} />
      <Route path="/comofunciona" element={<ComoFunciona />} />
      <Route path="/cabecalho" element={<Cabecalho />} />
      <Route path="/final" element={<FinalDaPagina />} />
    </Routes>
  );
}

export default App;