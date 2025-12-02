import React, { useState } from "react";
import api from "../data/services/api";

const PostCard = ({ post, onContratoCriado }) => {
  const [mostrarForm, setMostrarForm] = useState(false);
  const [tempo, setTempo] = useState("");
  const [valor, setValor] = useState("");
  const [assinatura, setAssinatura] = useState("");
  const [loading, setLoading] = useState(false);

  const usuarioSalvo = localStorage.getItem("usuario");
  const usuario = usuarioSalvo ? JSON.parse(usuarioSalvo) : null;

  const podeContratar = usuario && usuario.id !== post.usuarioId;

  const abrirForm = () => {
    if (!usuario) {
      alert("Faça login para contratar.");
      return;
    }
    setMostrarForm(true);
  };

  const enviarContrato = async () => {
    if (!usuario) return;
    if (!tempo || !valor) {
      alert("Informe tempo e valor.");
      return;
    }
    setLoading(true);
    try {
      const payload = {
        postagemId: post.id,
        contratanteId: usuario.id,
        tempoServico: tempo,
        valorNegociado: parseFloat(valor),
        assinaturaContratante: assinatura || usuario.nome,
      };

      const res = await api.post("/contratos", payload);

      alert("Contrato enviado!");
      // resetar form e notificar parent
      setMostrarForm(false);
      setTempo("");
      setValor("");
      setAssinatura("");
      onContratoCriado && onContratoCriado(res.data);
    } catch (err) {
      console.error("Erro ao criar contrato:", err);
      if (err.response) {
        alert(`Erro: ${err.response.data || "Falha ao criar contrato"}`);
      } else {
        alert("Erro de conexão.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h3 className="text-lg font-bold">{post.titulo}</h3>
      <p className="text-gray-700">{post.conteudo}</p>
      {post.imagemUrl && <img src={post.imagemUrl} alt="img" className="w-full mt-2 rounded" />}

      <div className="mt-3 flex items-center justify-between">
        <div className="text-sm text-gray-600">Por: {post.usuario?.nome}</div>

        {podeContratar && (
          <button
            onClick={abrirForm}
            className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Contratar
          </button>
        )}
      </div>

      {mostrarForm && (
        <div className="mt-3 p-3 border rounded bg-gray-50">
          <h4 className="font-semibold">Formulário de Contratação</h4>

          <input 
            value={tempo} 
            onChange={(e) => setTempo(e.target.value)} 
            placeholder="Tempo de serviço (ex: 2h)" 
            className="w-full mt-2 p-2 border rounded" 
          />
          <input 
            value={valor} 
            onChange={(e) => setValor(e.target.value)} 
            placeholder="Valor negociado (ex: 120.00)" 
            className="w-full mt-2 p-2 border rounded" 
          />
          <input 
            value={assinatura} 
            onChange={(e) => setAssinatura(e.target.value)} 
            placeholder="Assinatura (nome) do contratante" 
            className="w-full mt-2 p-2 border rounded" 
          />

          <div className="mt-2 flex gap-2">
            <button 
              onClick={enviarContrato} 
              disabled={loading} 
              className="px-3 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 disabled:bg-gray-400"
            >
              {loading ? "Enviando..." : "Enviar Contrato"}
            </button>
            <button 
              onClick={() => setMostrarForm(false)} 
              className="px-3 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
