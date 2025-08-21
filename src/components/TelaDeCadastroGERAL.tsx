import React, { useState } from "react";

interface TelaDeCadastroGERALProps {
  onVoltar: () => void;
}

const TelaDeCadastroGERAL: React.FC<TelaDeCadastroGERALProps> = ({ onVoltar }) => {
  const [etapa, setEtapa] = useState<"inicio" | "procurar" | "temporario" | "registrado" | "empresa">("inicio");

  // Campos de formulário podem ser controlados por estados aqui

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {etapa === "inicio" && (
          <>
            <h2 className="text-xl font-bold text-orange-700 mb-6 text-center">Como deseja se cadastrar?</h2>
            <button
              className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 font-medium mb-4"
              onClick={() => setEtapa("procurar")}
            >
              Procurar Serviços
            </button>
            <button
              className="w-full bg-orange-50 text-orange-700 py-2 rounded-lg hover:bg-orange-100 font-medium border border-orange-600"
              onClick={() => setEtapa("empresa")}
            >
              Registrar Empresa
            </button>
            <button
              onClick={onVoltar}
              className="mt-4 text-orange-600 hover:underline text-sm"
            >
              Voltar
            </button>
          </>
        )}

        {etapa === "procurar" && (
          <>
            <h2 className="text-xl font-bold text-orange-700 mb-6 text-center">Tipo de Serviço</h2>
            <button
              className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 font-medium mb-4"
              onClick={() => setEtapa("temporario")}
            >
              Serviço Temporário
            </button>
            <button
              className="w-full bg-orange-50 text-orange-700 py-2 rounded-lg hover:bg-orange-100 font-medium border border-orange-600"
              onClick={() => setEtapa("registrado")}
            >
              Serviço Registrado
            </button>
            <button
              onClick={() => setEtapa("inicio")}
              className="mt-4 text-orange-600 hover:underline text-sm"
            >
              Voltar
            </button>
          </>
        )}

        {etapa === "temporario" && (
          <>
            <h2 className="text-xl font-bold text-orange-700 mb-6 text-center">Cadastro de Serviço Temporário</h2>
            <form className="space-y-4">
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="Tipo de serviço" />
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="Tempo de serviço (dias, meses ou indeterminado)" />
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="Data de finalização (opcional)" />
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="Nome" />
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="CEP" />
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="Número" />
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="CPF" />
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="RG" />
              <button className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 font-medium">Cadastrar</button>
            </form>
            <button
              onClick={() => setEtapa("procurar")}
              className="mt-4 text-orange-600 hover:underline text-sm"
            >
              Voltar
            </button>
          </>
        )}

        {etapa === "registrado" && (
          <>
            <h2 className="text-xl font-bold text-orange-700 mb-6 text-center">Cadastro de Serviço Registrado</h2>
            <form className="space-y-4">
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="Nome" />
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="CEP" />
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="Número" />
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="CPF" />
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="RG" />
              <button className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 font-medium">Cadastrar</button>
            </form>
            <button
              onClick={() => setEtapa("procurar")}
              className="mt-4 text-orange-600 hover:underline text-sm"
            >
              Voltar
            </button>
          </>
        )}

        {etapa === "empresa" && (
          <>
            <h2 className="text-xl font-bold text-orange-700 mb-6 text-center">Cadastro de Empresa</h2>
            <form className="space-y-4">
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="Razão Social" />
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="CNPJ" />
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="Inscrição Social" />
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="Telefone Corporativo (opcional)" />
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="Telefone do Responsável" />
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="Site" />
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="Instagram" />
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="Facebook" />
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="Nome do Responsável" />
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="CPF do Responsável" />
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="RG do Responsável" />
              <button className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 font-medium">Cadastrar Empresa</button>
            </form>
            <button
              onClick={() => setEtapa("inicio")}
              className="mt-4 text-orange-600 hover:underline text-sm"
            >
              Voltar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TelaDeCadastroGERAL;