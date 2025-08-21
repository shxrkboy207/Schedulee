import React from "react";

interface TelaDeLoginProps {
  onVoltar: () => void;
  onCadastrar: () => void;
}

const TelaDeLogin: React.FC<TelaDeLoginProps> = ({ onVoltar, onCadastrar }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-orange-700 mb-6 text-center">Entrar</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
              placeholder="Seu email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Senha</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
              placeholder="Sua senha"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors font-medium"
          >
            Entrar
          </button>
        </form>
        <div className="flex flex-col items-center mt-6 space-y-2">
          <button
            onClick={onCadastrar}
            className="w-full bg-orange-50 text-orange-700 py-2 rounded-lg hover:bg-orange-100 font-medium border border-orange-600"
          >
            Cadastrar-se
          </button>
          <button
            onClick={onVoltar}
            className="text-orange-600 hover:underline text-sm"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default TelaDeLogin;