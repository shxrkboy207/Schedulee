// versão final COMPLETA com Área MEI inserida no local correto

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../data/services/api";

interface Usuario {
  id: number;
  nome: string;
  email: string;
  telefone?: string;
  endereco?: string;
  cpf?: string;
  fotoPerfil?: string;
  isMei: boolean;
  tipoConta?: string;
  bio?: string;
}

interface MeiCadastro {
  usuarioId: number;
  nomeFantasia: string;
  cnpj?: string;
  cep?: string;
  bio?: string;
}

const TelaDePerfilLogin: React.FC = () => {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(true);
  const [editando, setEditando] = useState(false);
  const [converting, setConverting] = useState(false);
  const [manterLogado, setManterLogado] = useState(false);

  const [meiData, setMeiData] = useState<MeiCadastro>({
    usuarioId: 0,
    nomeFantasia: "",
    cnpj: "",
    cep: "",
    bio: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem("usuario");

    if (!stored) {
      navigate("/login");
      return;
    }

    let user: Usuario | null = null;

    try {
      user = JSON.parse(stored);
    } catch {
      console.error("Erro ao interpretar usuário salvo.");
      navigate("/login");
      return;
    }

    if (!user?.id) {
      navigate("/login");
      return;
    }

    carregarPerfil(user.id);

    setManterLogado(localStorage.getItem("manterLogado") === "true");
  }, []);

  const carregarPerfil = async (id: number) => {
    try {
      setLoading(true);

      const res = await api.get(`/usuarios/${id}/perfil`);
      setUsuario(res.data);

      localStorage.setItem("usuario", JSON.stringify(res.data));
    } catch (err) {
      console.error("Erro ao carregar perfil:", err);
    } finally {
      setLoading(false);
    }
  };

  const atualizarPerfil = async () => {
    if (!usuario) return;

    try {
      const res = await api.put(`/usuarios/${usuario.id}`, {
        nome: usuario.nome,
        telefone: usuario.telefone,
        endereco: usuario.endereco,
      });

      alert("Perfil atualizado!");
      setUsuario(res.data);
      localStorage.setItem("usuario", JSON.stringify(res.data));
      setEditando(false);
    } catch (err) {
      alert("Erro ao atualizar perfil.");
      console.error(err);
    }
  };

  const cadastrarMei = async () => {
    if (!usuario) return;

    if (!meiData.nomeFantasia.trim()) {
      alert("Nome Fantasia é obrigatório.");
      return;
    }

    setConverting(true);

    try {
      const payload = {
        usuarioId: usuario.id,
        nomeFantasia: meiData.nomeFantasia,
        cnpj: meiData.cnpj || null,
        cep: meiData.cep || null,
        bio: meiData.bio || null,
      };

      const res = await api.post(`/MeiCadastro`, payload);

      alert("Cadastro MEI concluído!");

      const usuarioAtualizado = res.data.usuario;

      setUsuario(usuarioAtualizado);
      localStorage.setItem("usuario", JSON.stringify(usuarioAtualizado));
    } catch (err: any) {
      console.error(err);
      alert(err.response?.data || "Erro ao se tornar MEI");
    } finally {
      setConverting(false);
    }
  };

  const logout = () => {
    if (!manterLogado) {
      localStorage.removeItem("usuario");
    }
    navigate("/login");
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen text-orange-700 text-lg">
        Carregando perfil...
      </div>
    );

  if (!usuario)
    return (
      <div className="flex items-center justify-center h-screen text-red-700">
        Erro ao carregar usuário.
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xl">
        <div className="flex flex-col items-center text-center">
          <img
            src={usuario.fotoPerfil || "https://via.placeholder.com/150"}
            alt="Foto"
            className="w-32 h-32 rounded-full border-4 border-orange-500 mb-4 object-cover"
          />

          <h1 className="text-3xl font-bold text-orange-700">{usuario.nome}</h1>
          <p className="text-gray-600">{usuario.email}</p>

          <span
            className={`mt-2 px-4 py-1 rounded-full text-white text-sm ${
              usuario.isMei ? "bg-green-600" : "bg-gray-500"
            }`}
          >
            {usuario.isMei ? "Empreendedor MEI" : "Conta Comum"}
          </span>
        </div>

        {!editando ? (
          <>
            <div className="mt-6 space-y-3">
              <div className="p-3 bg-gray-50 rounded border">
                <strong>Telefone:</strong> {usuario.telefone || "Não informado"}
              </div>

              <div className="p-3 bg-gray-50 rounded border">
                <strong>Endereço:</strong> {usuario.endereco || "Não informado"}
              </div>

              <div className="p-3 bg-gray-50 rounded border">
                <strong>CPF:</strong> {usuario.cpf || "Não informado"}
              </div>

              <div className="p-3 bg-gray-50 rounded border">
                <strong>Bio:</strong> {usuario.bio || "Não informada"}
              </div>
            </div>

            <button
              onClick={() => setEditando(true)}
              className="mt-6 w-full px-4 py-2 bg-orange-600 text-white rounded-lg"
            >
              Editar Perfil
            </button>
          </>
        ) : (
          <>
            <div className="mt-6 space-y-3">
              <input
                type="text"
                value={usuario.nome}
                onChange={(e) =>
                  setUsuario({ ...usuario, nome: e.target.value })
                }
                className="w-full p-3 border rounded"
              />

              <input
                type="text"
                value={usuario.telefone || ""}
                onChange={(e) =>
                  setUsuario({ ...usuario, telefone: e.target.value })
                }
                className="w-full p-3 border rounded"
              />

              <input
                type="text"
                value={usuario.endereco || ""}
                onChange={(e) =>
                  setUsuario({ ...usuario, endereco: e.target.value })
                }
                className="w-full p-3 border rounded"
              />
            </div>

            <button
              onClick={atualizarPerfil}
              className="mt-4 w-full px-4 py-2 bg-green-600 text-white rounded-lg"
            >
              Salvar
            </button>

            <button
              onClick={() => setEditando(false)}
              className="mt-3 w-full px-4 py-2 bg-gray-500 text-white rounded-lg"
            >
              Cancelar
            </button>
          </>
        )}

        {/* AREA DE TORNAR MEI */}
        {!usuario.isMei && (
          <div className="mt-8 p-4 border rounded-lg bg-gray-50">
            <h2 className="text-xl font-bold mb-2 text-orange-700">
              Transformar em MEI
            </h2>

            <input
              type="text"
              placeholder="Nome Fantasia"
              className="w-full p-2 border rounded mb-2"
              onChange={(e) =>
                setMeiData({ ...meiData, nomeFantasia: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="CNPJ (opcional)"
              className="w-full p-2 border rounded mb-2"
              onChange={(e) =>
                setMeiData({ ...meiData, cnpj: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="CEP (opcional)"
              className="w-full p-2 border rounded mb-2"
              onChange={(e) =>
                setMeiData({ ...meiData, cep: e.target.value })
              }
            />

            <textarea
              placeholder="Bio (opcional)"
              className="w-full p-2 border rounded mb-2"
              onChange={(e) =>
                setMeiData({ ...meiData, bio: e.target.value })
              }
            />

            <button
              disabled={converting}
              onClick={cadastrarMei}
              className="mt-4 w-full px-4 py-2 bg-green-600 text-white rounded-lg disabled:opacity-50"
            >
              {converting ? "Convertendo..." : "Ativar MEI"}
            </button>
          </div>
        )}

        {/* AREA DO EMPREENDEDOR MEI */}
        {usuario.isMei && (
          <div className="mt-8 p-4 border rounded-lg bg-green-50 shadow">
            <h2 className="text-xl font-bold text-green-700 mb-3 text-center">
              Área do Empreendedor MEI
            </h2>

            <button
              onClick={() => navigate("/nova-postagem")}
              className="w-full p-3 bg-green-600 hover:bg-green-700 text-white rounded mb-2"
            >
              Criar Nova Postagem
            </button>

            <button
              onClick={() => navigate("/postagens")}
              className="w-full p-3 bg-green-700 hover:bg-green-800 text-white rounded mb-2"
            >
              Minhas Postagens
            </button>

            <button
              onClick={() => navigate("/editar-perfil")}
              className="w-full p-3 bg-green-800 hover:bg-green-900 text-white rounded"
            >
              Dados do MEI
            </button>
          </div>
        )}

        {/* CHECKBOX + SAIR */}
        <div className="mt-4 flex items-center">
          <input
            type="checkbox"
            checked={manterLogado}
            onChange={(e) => {
              setManterLogado(e.target.checked);
              localStorage.setItem("manterLogado", e.target.checked.toString());
            }}
            className="mr-2"
          />
          <span>Manter conectado</span>
        </div>

        <button
          onClick={logout}
          className="mt-6 w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Sair
        </button>
      </div>
    </div>
  );
};

export default TelaDePerfilLogin;
