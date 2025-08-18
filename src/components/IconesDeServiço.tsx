import React from 'react';
import { Star } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  category: string;
  provider: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
}

interface IconesDeServicoPropriedades {
  service: Service;
}

const IconesDeServico: React.FC<IconesDeServicoPropriedades> = ({ service }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100">
      <div className="aspect-w-16 aspect-h-9 bg-gray-200">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
            {service.category}
          </span>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 font-medium text-sm">{service.rating}</span>
            <span className="text-gray-500 text-sm ml-1">({service.reviews})</span>
          </div>
        </div>

        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {service.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4">Por {service.provider}</p>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-green-600">
            R$ {service.price.toLocaleString()}
          </div>
          <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors font-medium">
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  );
};

export default IconesDeServico;