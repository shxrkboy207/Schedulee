import React from 'react';
import IconesDeServico from './IconesDeServiço';
import { services } from '../data/services';

interface ServicesProps {
  services: typeof services;
}

const ServicesGrid: React.FC<ServicesProps> = ({ services }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <IconesDeServico key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServicesGrid;