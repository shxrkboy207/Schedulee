import React, { useState } from "react";
import api from "../data/services/api";
import { useNavigate } from "react-router-dom";

interface TelaDeLoginProps {
  onVoltar: () => void;
  onCadastrar: () => void;
}

const TelaDeLogin: React.FC<TelaDeLoginProps> = ({ onVoltar, onCadastrar }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const fazerLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");
    setLoading(true);

    try {
      console.log("🔸 Enviando login:", { email, senha });

      const res = await api.post("/Usuarios/login", { email, senha });

      console.log("🔹 Login OK:", res.data);

      if (!res.data || !res.data.id) {
        throw new Error("Resposta inválida do servidor.");
      }

      localStorage.setItem("usuario", JSON.stringify(res.data));
      navigate("/perfil");

    } catch (err: any) {
      console.error("❌ Erro ao logar:", err.response?.data);

      const mensagem =
        typeof err.response?.data === "string"
          ? err.response.data
          : err.response?.data?.message || "Credenciais inválidas.";

      setErro(mensagem);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-orange-700 mb-6 text-center">
          Entrar
        </h2>

        {erro && (
          <p className="text-red-600 text-center bg-red-100 p-2 rounded">
            {erro}
          </p>
        )}

        <form className="space-y-4" onSubmit={fazerLogin}>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Senha
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-orange-600 text-white py-2 rounded-lg font-medium
              ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-orange-700"}`}
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <div className="flex flex-col items-center mt-6 space-y-2">
          <button
            onClick={onCadastrar}
            className="w-full bg-orange-50 text-orange-700 py-2 rounded-lg border border-orange-600"
          >
            Criar conta
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
