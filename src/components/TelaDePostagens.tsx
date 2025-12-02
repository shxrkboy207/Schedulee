import React, { useEffect, useState } from "react";
import api from "../data/services/api";
import { useNavigate } from "react-router-dom";

const TelaDePostagens: React.FC = () => {
  const navigate = useNavigate();
  const [postagens, setPostagens] = useState<any[]>([]);
  const [isMei, setIsMei] = useState(false);

  useEffect(() => {
    carregarFeed();

    const stored = localStorage.getItem("usuario");
    if (stored) {
      const user = JSON.parse(stored);
      setIsMei(user.isMei === true || user.IsMei === true);
    }
  }, []);

  const carregarFeed = async () => {
    try {
      // backend: GET /api/postagens
      const res = await api.get("/postagens");
      setPostagens(res.data);
    } catch (err) {
      console.error("Erro ao carregar postagens:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl text-orange-700 font-bold text-center mb-6">
          Postagens
        </h1>

        {isMei && (
          <button
            onClick={() => navigate("/nova-postagem")}
            className="mb-6 w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 font-semibold"
          >
            Criar Nova Postagem
          </button>
        )}

        <div className="space-y-6">
          {postagens.length === 0 ? (
            <p className="text-center text-gray-600">Nenhuma postagem ainda.</p>
          ) : (
            postagens.map((p) => (
              <div
                key={p.id}
                className="bg-white shadow-md p-5 rounded-xl transition hover:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={p.usuario?.fotoPerfil || "https://via.placeholder.com/50"}
                    className="w-12 h-12 rounded-full border-2 border-orange-500 object-cover"
                  />
                  <span className="font-medium text-gray-800">
                    {p.usuario?.nome}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-orange-700">{p.titulo}</h2>
                <p className="text-gray-700 mt-2">{p.conteudo}</p>

                {(p.imagemUrl || p.imagem) && (
                  <img
                    src={p.imagemUrl || p.imagem}
                    className="w-full mt-4 rounded-lg shadow"
                    alt="Imagem da postagem"
                  />
                )}

                <p className="text-sm text-gray-500 mt-3">
                  {new Date(p.criadoEm || p.dataPostagem || p.CriadoEm || p.DataPostagem).toLocaleString()}
                </p>

              </div>
            ))
          )}
        </div>

        <button
          onClick={() => navigate("/perfil")}
          className="mt-8 text-orange-700 hover:underline text-center w-full"
        >
          Voltar ao Perfil
        </button>
      </div>
    </div>
  );
};

export default TelaDePostagens;
