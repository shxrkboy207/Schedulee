import React, { useEffect, useState } from "react";
import api from "../data/services/api";
import { useNavigate } from "react-router-dom";

const CadastroMei: React.FC = () => {
  const navigate = useNavigate();

  const [nomeFantasia, setNomeFantasia] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [cep, setCep] = useState("");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(false);

  const [usuario, setUsuario] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("usuario");
    if (!stored) {
      navigate("/login");
      return;
    }
    setUsuario(JSON.parse(stored));
  }, []);

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!usuario?.id) return alert("Erro: usuário não encontrado!");

    const payload = {
      usuarioId: usuario.id,
      nomeFantasia,
      cnpj: cnpj || null,
      cep: cep || null,
      bio: bio || null,
    };

    try {
      setLoading(true);

      console.log("📤 Enviando MEI:", payload);

      const res = await api.post("/MeiCadastro", payload);

      console.log("🎉 MEI OK:", res.data);

      alert("MEI criado com sucesso!");

      // Atualiza user local
      const atualizado = {
        ...usuario,
        isMei: true,
        tipoConta: "Empreendedor",
        bio: bio || usuario.bio
      };

      // Backend retorna o usuário atualizado
      localStorage.setItem("usuario", JSON.stringify(res.data));
      navigate("/perfil");


    } catch (err: any) {
      console.error("❌ Erro MEI:", err.response?.data);
      alert(err.response?.data || "Erro ao cadastrar MEI");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <form
        onSubmit={enviar}
        className="bg-white p-6 rounded shadow max-w-md w-full space-y-4"
      >
        <h2 className="text-xl font-bold text-orange-700 text-center">
          Cadastro MEI
        </h2>

        <input
          placeholder="Nome fantasia"
          className="w-full border p-2 rounded"
          value={nomeFantasia}
          onChange={(e) => setNomeFantasia(e.target.value)}
          required
        />

        <input
          placeholder="CNPJ (opcional)"
          className="w-full border p-2 rounded"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
        />

        <input
          placeholder="CEP (opcional)"
          className="w-full border p-2 rounded"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />

        <textarea
          placeholder="Bio (opcional)"
          className="w-full border p-2 rounded"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          {loading ? "Enviando..." : "Finalizar cadastro"}
        </button>

        <button
          type="button"
          onClick={() => navigate("/perfil")}
          className="w-full text-orange-600 mt-2"
        >
          Voltar ao Perfil
        </button>
      </form>
    </div>
  );
};

export default CadastroMei;
