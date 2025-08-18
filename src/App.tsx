import React, { useState } from "react";
import ParteDeCimaDaPagina from "./components/parteDeCimaDaPagina";
import SecaoDeServicos from "./components/SecaoDeServicos";
import TabNavigation from "./components/TabNavigation";
import ServicesGrid from "./components/ServicesGrid";
import ComoFunciona from "./components/comoFunciona";
import Cabecalho from "./components/cabecalho";
import FinalDaPagina from "./components/finalDaPagina";
import { services } from "./data/services";

function App() {
  const [activeTab, setActiveTab] = useState<"services" | "how-it-works">(
    "services"
  );
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* header com controle das abas */}
      <ParteDeCimaDaPagina activeTab={activeTab} setActiveTab={setActiveTab} />

      <SecaoDeServicos />

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TabNavigation
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          {/* aba de serviços */}
          {activeTab === "services" && (
            <ServicesGrid services={services} category={selectedCategory} />
          )}

          {/* aba de como funciona */}
          {activeTab === "how-it-works" && <ComoFunciona />}
        </div>
      </section>

      <Cabecalho />
      <FinalDaPagina />
    </div>
  );
}

export default App;
