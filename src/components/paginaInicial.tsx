import React, { useMemo, useState } from "react";
import ParteDeCimaDaPagina from "./parteDeCimaDaPagina";
import SecaoDeServicos from "./SecaoDeServicos";
import TabNavigation from "./TabNavigation";
import ServicesGrid from "./ServicesGrid";
import ComoFunciona from "./comoFunciona";
import Cabecalho from "./cabecalho";
import FinalDaPagina from "./finalDaPagina";
import TelaDeLogin from "./TelaDeLogin";
import TelaDeCadastroGERAL from "./TelaDeCadastroGERAL";
import { services } from "../data/services";

const PaginaInicial: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"services" | "how-it-works">("services");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [showLogin, setShowLogin] = useState(false);
  const [showCadastro, setShowCadastro] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowCadastro(false);
  };

  const handleCadastroClick = () => {
    setShowCadastro(true);
    setShowLogin(false);
  };

  const handleVoltarParaServicos = () => {
    setShowLogin(false);
    setShowCadastro(false);
    setActiveTab("services");
  };

  const filteredServices = useMemo(() => {
    if (!selectedCategory || selectedCategory === "Todos") return services;
    return services.filter((s: any) => String(s.category) === String(selectedCategory));
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-50">
        <ParteDeCimaDaPagina
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setShowLogin(false);
            setShowCadastro(false);
          }}
          onLoginClick={handleLoginClick}
          onCadastroClick={handleCadastroClick}
          isLoginActive={showLogin}
          onVoltarParaServicos={handleVoltarParaServicos}
        />
      </div>

      {showLogin && (
        <TelaDeLogin
          onVoltar={handleVoltarParaServicos}
          onCadastrar={handleCadastroClick}
        />
      )}

      {showCadastro && (
        <TelaDeCadastroGERAL
          onVoltar={handleVoltarParaServicos}
        />
      )}

      {!showLogin && !showCadastro && (
        <>
          <SecaoDeServicos />
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <TabNavigation
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
              {activeTab === "services" && (
                <ServicesGrid services={filteredServices} />
              )}
              {activeTab === "how-it-works" && <ComoFunciona />}
            </div>
          </section>
          <Cabecalho />
          <FinalDaPagina />
        </>
      )}
    </div>
  );
};

export default PaginaInicial;