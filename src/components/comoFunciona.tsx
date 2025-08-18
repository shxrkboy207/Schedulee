import React from 'react';
import { Search, Star, Phone, User, TrendingUp, DollarSign, Award } from 'lucide-react';

const ComoFunciona: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Como o Scheedule Funciona?
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          É muito simples! Vamos te explicar passo a passo como usar nossa plataforma
        </p>
      </div>

      {/* Para quem precisa de serviços */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-orange-600 mb-8 text-center">
          🔍 Precisa de um Serviço?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-orange-600" />
            </div>
            <h4 className="text-xl font-semibold mb-3">1. Busque</h4>
            <p className="text-gray-600 leading-relaxed">
              Digite o que você precisa na barra de busca. Por exemplo: "encanador", "manicure", "professor de inglês"
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-10 h-10 text-orange-600" />
            </div>
            <h4 className="text-xl font-semibold mb-3">2. Compare</h4>
            <p className="text-gray-600 leading-relaxed">
              Veja os profissionais disponíveis, seus preços, avaliações de outros clientes e escolha o melhor
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-10 h-10 text-orange-600" />
            </div>
            <h4 className="text-xl font-semibold mb-3">3. Contrate</h4>
            <p className="text-gray-600 leading-relaxed">
              Entre em contato direto com o profissional e combine todos os detalhes do seu serviço
            </p>
          </div>
        </div>
      </div>

      {/* Para quem oferece serviços */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-emerald-600 mb-8 text-center">
          💼 Oferece Serviços?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-10 h-10 text-emerald-600" />
            </div>
            <h4 className="text-xl font-semibold mb-3">1. Cadastre-se</h4>
            <p className="text-gray-600 leading-relaxed">
              Crie seu perfil gratuitamente. Conte sobre você, sua experiência e os serviços que oferece
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-10 h-10 text-emerald-600" />
            </div>
            <h4 className="text-xl font-semibold mb-3">2. Divulgue</h4>
            <p className="text-gray-600 leading-relaxed">
              Publique seus serviços com fotos, preços e descrições. Quanto mais completo, melhor!
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-10 h-10 text-emerald-600" />
            </div>
            <h4 className="text-xl font-semibold mb-3">3. Ganhe</h4>
            <p className="text-gray-600 leading-relaxed">
              Receba contatos de clientes interessados e faça seus negócios crescerem
            </p>
          </div>
        </div>
      </div>

      {/* Tipos de serviços */}
      <div className="bg-gray-50 rounded-2xl p-8 mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Que Tipos de Serviços Posso Encontrar?
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-2">🏠</div>
            <p className="font-medium">Casa e Reforma</p>
            <p className="text-sm text-gray-600">Encanador, Eletricista, Pintor, Pedreiro</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">💅</div>
            <p className="font-medium">Beleza</p>
            <p className="text-sm text-gray-600">Manicure, Cabeleireiro, Esteticista</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">📚</div>
            <p className="font-medium">Educação</p>
            <p className="text-sm text-gray-600">Professores, Reforço Escolar, Idiomas</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🚗</div>
            <p className="font-medium">Transporte</p>
            <p className="text-sm text-gray-600">Motorista, Entregador, Mudanças</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🍰</div>
            <p className="font-medium">Alimentação</p>
            <p className="text-sm text-gray-600">Cozinheiro, Confeiteiro, Buffet</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🧹</div>
            <p className="font-medium">Limpeza</p>
            <p className="text-sm text-gray-600">Diarista, Faxineira, Jardineiro</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">💻</div>
            <p className="font-medium">Tecnologia</p>
            <p className="text-sm text-gray-600">Técnico, Designer, Programador</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🎵</div>
            <p className="font-medium">Eventos</p>
            <p className="text-sm text-gray-600">DJ, Fotógrafo, Animador</p>
          </div>
        </div>
      </div>

      {/* Segurança */}
      <div className="bg-orange-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-orange-800 mb-6 text-center">
          🛡️ É Seguro?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-orange-700" />
            </div>
            <div>
              <h4 className="font-semibold text-orange-800 mb-2">Profissionais Verificados</h4>
              <p className="text-orange-700">
                Todos os profissionais passam por verificação de identidade e podem ser avaliados pelos clientes
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center flex-shrink-0">
              <Star className="w-6 h-6 text-orange-700" />
            </div>
            <div>
              <h4 className="font-semibold text-orange-800 mb-2">Sistema de Avaliações</h4>
              <p className="text-orange-700">
                Veja as avaliações reais de outros clientes antes de contratar qualquer serviço
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComoFunciona;