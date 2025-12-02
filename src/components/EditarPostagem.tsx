import React, { useEffect, useState } from "react";
import api from "../data/services/api";
import { useNavigate, useParams } from "react-router-dom";

const EditarPostagem: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [erro, setErro] = useState("");

  const [usuarioId, setUsuarioId] = useState<number | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("usuario");
    if (stored) {
      const user = JSON.parse(stored);
      setUsuarioId(user.id || user.Id);
    }
    carregarPostagem();
  }, []);

  const carregarPostagem = async () => {
    try {
      const res = await api.get(`/postagens/${id}`);
      setTitulo(res.data.titulo);
      setConteudo(res.data.conteudo);
    } catch (err) {
      console.error("Erro ao carregar postagem:", err);
      alert("Postagem não encontrada.");
      navigate("/postagens");
    }
  };

  const editar = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!usuarioId) {
      setErro("Usuário inválido.");
      return;
    }

    try {
      await api.put(`/postagens/${id}`, {
        titulo,
        conteudo,
        usuarioId, // backend verifica dono
      });
      navigate("/postagens");
      setTimeout(() => window.location.reload(), 100);
    } catch (err) {
      console.error("Erro ao editar postagem:", err);
      setErro("Erro ao editar postagem.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-md">
        <h1 className="text-2xl text-orange-700 font-bold mb-4">
          Editar Postagem
        </h1>

        {erro && <p className="text-red-600">{erro}</p>}

        <form className="space-y-4" onSubmit={editar}>
          <input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <textarea
            value={conteudo}
            onChange={(e) => setConteudo(e.target.value)}
            className="w-full border p-2 rounded min-h-[120px]"
          ></textarea>

          <button className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700">
            Salvar
          </button>
        </form>

        <button
          onClick={() => navigate("/postagens")}
          className="mt-4 text-orange-600 hover:underline"
        >
          Voltar
        </button>
      </div>
    </div>
  );
};

export default EditarPostagem;
