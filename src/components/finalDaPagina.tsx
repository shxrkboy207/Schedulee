import React from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FinalDaPagina: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full flex items-center justify-center">
                <SearchIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Scheedule</span>
            </div>
            <p className="text-gray-400 mb-6">
              A plataforma mais simples para conectar quem precisa com quem sabe fazer.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
                📘
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
                📷
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
                🐦
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-6">Para Profissionais</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <button
                  className="hover:text-white transition-colors"
                  onClick={() => navigate("/dicas?scrollTo=profissionais")}
                >
                  Como Começar
                </button>
              </li>
              <li>
                <button
                  className="hover:text-white transition-colors"
                  onClick={() => navigate("/cadastro")}
                >
                  Cadastrar Serviço
                </button>
              </li>
              <li>
                <button
                  className="hover:text-white transition-colors"
                  onClick={() => navigate("/dicas?scrollTo=dicas")}
                >
                  Dicas de Sucesso
                </button>
              </li>
              <li>
                <button
                  className="hover:text-white transition-colors"
                  onClick={() => navigate("/dicas?scrollTo=vendas")}
                >
                  Aumentar Vendas
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-6">Para Clientes</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">Como Buscar</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">Encontrar Profissionais</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">Avaliar Serviços</span>
              </li>
              <li>
                <button
                  className="hover:text-white transition-colors"
                  onClick={() => navigate("/dicas?scrollTo=dicas")}
                >
                  Dicas de Sucesso
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-6">Suporte</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">Centro de Ajuda</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">Contato</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">Termos de Uso</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">Privacidade</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2025 Scheedule. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 mt-4 md:mt-0">
            Conectando pessoas e fortalecendo comunidades
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FinalDaPagina;