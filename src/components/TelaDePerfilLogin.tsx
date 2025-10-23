import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../data/services/api";

interface TelaDePerfilLoginProps {
  onVoltar?: () => void;
}

const TelaDePerfilLogin: React.FC<TelaDePerfilLoginProps> = ({ onVoltar }) => {
  const [form, setForm] = useState({
    email: "",
    senha: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await api.post("/usuarios/login", form);
      
      if (response.data) {
        localStorage.setItem("usuario", JSON.stringify(response.data));
        navigate("/perfil");
      }
    } catch (err: any) {
      setError(
        err.response?.data?.message || 
        "Erro ao fazer login. Verifique suas credenciais."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-orange-700 mb-6 text-center">
          Login
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              value={form.senha}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-orange-600 text-white py-2 rounded-lg font-medium
              ${loading 
                ? "opacity-70 cursor-not-allowed" 
                : "hover:bg-orange-700"
              }`}
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        {onVoltar && (
          <button
            onClick={onVoltar}
            className="mt-4 text-orange-600 hover:text-orange-700 text-sm"
          >
            Voltar
          </button>
        )}

        <p className="mt-4 text-center text-sm text-gray-600">
          Não tem uma conta?{" "}
          <button
            onClick={() => navigate("/cadastro")}
            className="text-orange-600 hover:text-orange-700"
          >
            Cadastre-se
          </button>
        </p>
      </div>
    </div>
  );
};

export default TelaDePerfilLogin;