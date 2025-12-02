import React, { useEffect, useState } from "react";
import api from "../data/services/api";
import { useNavigate } from "react-router-dom";

interface Usuario { id: number; nome: string; email: string; telefone?: string; endereco?: string; cpf?: string; fotoPerfil?: string; bio?: string; }

const EditarPerfil: React.FC = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cpf, setCpf] = useState("");
  const [bio, setBio] = useState("");
  const [foto, setFoto] = useState<File | null>(null);
  const [manterConectado, setManterConectado] = useState<boolean>(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("usuario") || sessionStorage.getItem("usuario");
    if (!stored) { navigate("/login"); return; }
    const user = JSON.parse(stored);
    if (!user?.id) { navigate("/login"); return; }
    carregarPerfil(user.id);
  }, []);

  const carregarPerfil = async (id: number) => {
    try {
      const res = await api.get(`/usuarios/${id}/perfil`);
      setUsuario(res.data);
      setNome(res.data.nome || "");
      setTelefone(res.data.telefone || "");
      setEndereco(res.data.endereco || "");
      setCpf(res.data.cpf || "");
      setBio(res.data.bio || "");
    } catch (err) { console.error("Erro ao carregar perfil:", err); }
  };

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!usuario) return;
    setLoading(true);
    try {
      const putResponse = await api.put(`/usuarios/${usuario.id}`, { id: usuario.id, nome, telefone, endereco, cpf, bio });
      if (foto) {
        const form = new FormData(); form.append("File", foto);
        await api.post(`/usuarios/${usuario.id}/foto`, form, { headers: { "Content-Type": "multipart/form-data" } });
      }
      const updated = putResponse.data;
      if (manterConectado) { localStorage.setItem("usuario", JSON.stringify(updated)); sessionStorage.removeItem("usuario"); }
      else { sessionStorage.setItem("usuario", JSON.stringify(updated)); localStorage.removeItem("usuario"); }
      alert("Perfil atualizado com sucesso!"); navigate("/perfil");
    } catch (err) { console.error("Erro ao salvar perfil:", err); alert("Erro ao atualizar perfil."); }
    finally { setLoading(false); }
  };

  return (
    // seu JSX original (mantive o mesmo markup)
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-lg p-6 rounded shadow">
        <h2 className="text-2xl font-bold text-orange-700 mb-4">Editar Perfil</h2>
        <form onSubmit={enviar} className="space-y-4">
          <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" className="w-full border p-2 rounded" required />
          <input value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="Telefone" className="w-full border p-2 rounded" />
          <input value={endereco} onChange={(e) => setEndereco(e.target.value)} placeholder="Endereço" className="w-full border p-2 rounded" />
          <input value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="CPF" className="w-full border p-2 rounded" />
          <textarea value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Bio pública (aparecerá no perfil)" className="w-full border p-2 rounded" />
          <div>
            <label className="block mb-1">Foto de Perfil (opcional)</label>
            <input type="file" accept="image/*" onChange={(e) => setFoto(e.target.files?.[0] || null)} />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="manter" checked={manterConectado} onChange={(e) => setManterConectado(e.target.checked)} />
            <label htmlFor="manter">Manter-me conectado (não deslogar automaticamente)</label>
          </div>
          <button type="submit" disabled={loading} className="w-full bg-orange-600 text-white py-2 rounded">{loading ? "Salvando..." : "Salvar alterações"}</button>
          <button type="button" onClick={() => navigate("/perfil")} className="w-full mt-2 text-orange-600">Cancelar</button>
        </form>
      </div>
    </div>
  );
};

export default EditarPerfil;
