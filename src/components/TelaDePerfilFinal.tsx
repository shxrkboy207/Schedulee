import React, { useEffect, useState } from "react";
import api from "../data/services/api";

interface Postagem {
  id: number;
  conteudo: string;
  data: string;
}

const Perfil: React.FC = () => {
  const [usuario, setUsuario] = useState<any>(null);
  const [postagens, setPostagens] = useState<Postagem[]>([]);
  const [conteudo, setConteudo] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("usuario");
    if (user) {
      const u = JSON.parse(user);
      setUsuario(u);
      carregarPostagens(u.id);
    }
  }, []);

  const carregarPostagens = async (id: number) => {
    const res = await api.get(`/postagens/${id}`);
    setPostagens(res.data);
  };

  const criarPost = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.post("/postagens", { conteudo, usuarioId: usuario.id });
    setConteudo("");
    carregarPostagens(usuario.id);
  };

  if (!usuario) return <p>Carregando perfil...</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-orange-700">{usuario.nome}</h2>
        <p className="text-gray-600">{usuario.email}</p>
        <img
          src={usuario.fotoPerfil || "https://via.placeholder.com/150"}
          alt="Foto de perfil"
          className="w-32 h-32 rounded-full mt-4"
        />
      </div>

      <form onSubmit={criarPost} className="mt-6 bg-white p-4 rounded shadow">
        <textarea
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)}
          placeholder="Escreva algo..."
          className="w-full border p-2 rounded"
        />
        <button className="mt-2 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
          Publicar
        </button>
      </form>

      <div className="mt-6">
        {postagens.map((p) => (
          <div key={p.id} className="bg-white p-4 rounded shadow mb-3">
            <p>{p.conteudo}</p>
            <small className="text-gray-500">
              {new Date(p.data).toLocaleString()}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Perfil;
