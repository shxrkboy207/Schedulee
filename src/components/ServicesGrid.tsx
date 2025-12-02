import React, { useEffect, useState } from "react";
import api from "../data/services/api";

interface Postagem {
  id: number;
  titulo: string;
  conteudo: string;
  imagemUrl?: string;
  criadoEm: string;
  usuarioId: number;
}

const ServicesGrid: React.FC = () => {
  const [posts, setPosts] = useState<Postagem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("usuario");
    if (!stored) return;

    const user = JSON.parse(stored);

    carregarPostagens(user.id);
  }, []);

  const carregarPostagens = async (usuarioId: number) => {
    try {
      setLoading(true);

      const res = await api.get(`/postagens`);

      const minhas = res.data.filter((p: Postagem) => p.usuarioId === usuarioId);

      setPosts(minhas);
    } catch (error) {
      console.error("Erro ao carregar serviços:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="text-center text-orange-700 font-semibold mt-6">
        Carregando seus serviços...
      </div>
    );

  if (posts.length === 0)
    return (
      <div className="text-center text-gray-600 mt-6">
        <p className="text-lg">Nenhum Serviço Disponivel no momento...</p>
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white shadow rounded-lg p-4 border hover:shadow-lg transition"
        >
          {post.imagemUrl && (
            <img
              src={post.imagemUrl}
              alt="imagem"
              className="w-full h-40 object-cover rounded mb-3"
            />
          )}

          <h2 className="text-xl font-bold text-orange-700">{post.titulo}</h2>

          <p className="text-gray-700 mt-2">{post.conteudo}</p>

          <p className="text-sm text-gray-500 mt-3">
            Criado em: {new Date(post.criadoEm).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServicesGrid;
