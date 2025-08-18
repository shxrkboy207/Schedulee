import React from 'react';
import IconesDeServico from './IconesDeServiço';

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

interface ServicesGridProps {
  services: Service[];
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ services }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <IconesDeServico key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServicesGrid;