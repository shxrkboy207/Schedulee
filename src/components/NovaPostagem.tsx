import React, { useState } from "react";
import api from "../data/services/api";
import { useNavigate } from "react-router-dom";

const NovaPostagem: React.FC = () => {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [imagem, setImagem] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const usuarioId = JSON.parse(localStorage.getItem("usuario") || sessionStorage.getItem("usuario") || "{}").id;

  const criarPostagem = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      let imagemUrl: string | null = null;
      if (imagem) {
        const form = new FormData();
        form.append("arquivo", imagem);
        const upload = await api.post("/upload/imagem", form, { headers: { "Content-Type": "multipart/form-data" } });
        imagemUrl = upload.data;
      }
      await api.post("/postagens", { usuarioId, titulo, conteudo, imagemUrl });
      navigate("/postagens");
      setTimeout(() => window.location.reload(), 100);
    } catch (err) {
      console.error("Erro ao criar postagem:", err);
      alert("Erro ao criar postagem.");
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-xl p-8 rounded-lg w-full max-w-md">
        <h1 className="text-3xl text-orange-700 font-bold mb-6 text-center">Nova Postagem</h1>
        <form className="space-y-4" onSubmit={criarPostagem}>
          <input value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Título" className="w-full border p-2 rounded" required />
          <textarea value={conteudo} onChange={(e) => setConteudo(e.target.value)} placeholder="Conteúdo" className="w-full border p-2 rounded min-h-[120px]" required />
          <input type="file" onChange={(e) => setImagem(e.target.files?.[0] || null)} accept="image/*" />
          <button type="submit" disabled={loading} className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700">{loading ? "Enviando..." : "Criar Postagem"}</button>
        </form>
        <button onClick={() => navigate("/postagens")} className="mt-4 text-orange-600 hover:underline">Voltar</button>
      </div>
    </div>
  );
};

export default NovaPostagem;
