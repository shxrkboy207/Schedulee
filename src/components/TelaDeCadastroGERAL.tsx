import React, { useState } from "react";
import api from "../data/services/api";
import { useNavigate } from "react-router-dom";

interface Props {
  onVoltar: () => void;
}

const TelaDeCadastroGERAL: React.FC<Props> = ({ onVoltar }) => {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  const cadastrar = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");
    setLoading(true);

    try {
      const payload = { nome, email, senha, cpf };

      console.log("📤 Enviando cadastro:", payload);

      const res = await api.post("/Usuarios/cadastro", payload);

      console.log("🎉 Cadastro OK:", res.data);

      alert("Conta criada com sucesso!");

      navigate("/login");

    } catch (err: any) {
      const msg =
        err.response?.data?.message ||
        err.response?.data ||
        "Erro ao cadastrar.";

      setErro(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={cadastrar}
        className="bg-white p-6 rounded shadow max-w-md w-full space-y-4"
      >
        <h2 className="text-xl font-bold text-orange-700 text-center">
          Criar conta
        </h2>

        {erro && (
          <p className="text-red-600 bg-red-100 p-2 rounded text-center">
            {erro}
          </p>
        )}

        <input
          placeholder="Nome completo"
          className="w-full border p-2 rounded"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <input
          placeholder="Email"
          className="w-full border p-2 rounded"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          placeholder="Senha"
          className="w-full border p-2 rounded"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <input
          placeholder="CPF"
          className="w-full border p-2 rounded"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-600 text-white py-2 rounded"
        >
          {loading ? "Criando..." : "Criar conta"}
        </button>

        <button
          type="button"
          onClick={onVoltar}
          className="w-full text-orange-700 hover:underline mt-2"
        >
          Voltar
        </button>
      </form>
    </div>
  );
};

export default TelaDeCadastroGERAL;
