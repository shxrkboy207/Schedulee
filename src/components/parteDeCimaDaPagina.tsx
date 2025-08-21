import React from "react";
import { Search as SearchIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ParteDeCimaDaPaginaProps {
  activeTab: "services" | "how-it-works";
  setActiveTab?: (tab: "services" | "how-it-works") => void;
  onLoginClick?: () => void;
  onCadastroClick?: () => void;
  isLoginActive?: boolean;
  onVoltarParaServicos?: () => void;
}

const ParteDeCimaDaPagina: React.FC<ParteDeCimaDaPaginaProps> = ({
  activeTab,
  setActiveTab,
  onLoginClick,
  onCadastroClick,
  isLoginActive,
  onVoltarParaServicos,
}) => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full flex items-center justify-center">
                <SearchIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Scheedule</span>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => navigate("/")}
              className={`${
                activeTab === "services"
                  ? "text-orange-600"
                  : "text-gray-700 hover:text-orange-600"
              } font-medium transition-colors`}
            >
              Página Inicial
            </button>
            <button
              onClick={() => navigate("/", { state: { tab: "how-it-works" } })}
              className={`${
                activeTab === "how-it-works"
                  ? "text-orange-600"
                  : "text-gray-700 hover:text-orange-600"
              } font-medium transition-colors`}
            >
              Como Funciona
            </button>
          </nav>
          <div className="flex items-center space-x-4">
            <button
              className={`text-gray-700 hover:text-orange-600 font-medium transition-colors ${
                isLoginActive ? "font-bold underline" : ""
              }`}
              onClick={onLoginClick}
            >
              Entrar
            </button>
            <button
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors font-medium"
              onClick={onCadastroClick}
            >
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ParteDeCimaDaPagina;