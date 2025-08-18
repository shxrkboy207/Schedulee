import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

const SecaoDeBusca: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <section className="bg-gradient-to-br from-orange-600 via-orange-700 to-amber-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Conecte-se com os
            <span className="text-orange-200"> melhores profissionais</span>
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            A plataforma mais simples para encontrar e oferecer serviços profissionais.
            Conectamos pessoas que precisam de serviços com profissionais qualificados de todas as áreas.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-2 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="O que você precisa? Ex: Encanador, Manicure, Eletricista..."
                  className="w-full pl-12 pr-4 py-4 text-gray-900 rounded-xl border-0 focus:ring-2 focus:ring-orange-500 outline-none text-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select className="pl-12 pr-8 py-4 text-gray-900 rounded-xl border-0 focus:ring-2 focus:ring-orange-500 outline-none text-lg bg-white">
                  <option>Localização</option>
                  <option>São Paulo, SP</option>
                  <option>Rio de Janeiro, RJ</option>
                  <option>Belo Horizonte, MG</option>
                </select>
              </div>
              <button className="bg-orange-600 text-white px-8 py-4 rounded-xl hover:bg-orange-700 transition-colors font-semibold text-lg">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecaoDeBusca;