import React from 'react';

const Cabecalho: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Pronto para começar?
        </h2>
        <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
          Cadastre-se gratuitamente e comece a encontrar os melhores profissionais da sua região
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-emerald-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors">
            Buscar Serviços
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-emerald-700 transition-colors">
            Cadastrar Meu Serviço
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cabecalho;