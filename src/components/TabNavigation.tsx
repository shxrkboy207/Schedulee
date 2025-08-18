import React from 'react';
import { Search as SearchIcon, Users, Filter } from 'lucide-react';

interface TabNavigationProps {
  activeTab: 'services' | 'how-it-works';
  setActiveTab: (tab: 'services' | 'how-it-works') => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  setActiveTab,
  selectedCategory,
  setSelectedCategory
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
      <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-6 md:mb-0">
        <button
          onClick={() => setActiveTab('services')}
          className={`px-6 py-3 rounded-md font-medium transition-all ${
            activeTab === 'services'
              ? 'bg-white text-orange-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <SearchIcon className="w-5 h-5 inline mr-2" />
          Serviços Disponíveis
        </button>
        <button
          onClick={() => setActiveTab('how-it-works')}
          className={`px-6 py-3 rounded-md font-medium transition-all ${
            activeTab === 'how-it-works'
              ? 'bg-white text-orange-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Users className="w-5 h-5 inline mr-2" />
          Como Funciona
        </button>
      </div>

      {activeTab === 'services' && (
        <div className="flex items-center space-x-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
          >
            <option value="Todos">Todas as Categorias</option>
            <option value="Casa">Casa e Reforma</option>
            <option value="Beleza">Beleza e Estética</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Educacao">Educação</option>
            <option value="Saude">Saúde</option>
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filtros</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default TabNavigation;