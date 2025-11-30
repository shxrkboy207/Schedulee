import React, { useState } from "react";
import InputMask from "react-input-mask";
import api from "../data/services/api";

interface TelaDeCadastroGERALProps {
  onVoltar?: () => void;
}

const TelaDeCadastroGERAL: React.FC<TelaDeCadastroGERALProps> = ({ onVoltar }) => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    telefone: "",
    endereco: "",
    cpf: "",
    fotoPerfil: ""
  });

  const [erroCpf, setErroCpf] = useState("");
  const [loading, setLoading] = useState(false);
  const [codigoPais, setCodigoPais] = useState("+55");

  // Função para validar CPF
  const validarCPF = (cpf: string): boolean => {
    cpf = cpf.replace(/\D/g, "");
    if (cpf.length !== 11) return false;
    if (/^(\d)\1{10}$/.test(cpf)) return false;

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) {
      soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) {
      soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;

    return true;
  };

  // Atualiza os campos do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (name === "cpf") {
      setErroCpf("");
    }
  };

  // Envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Valida campos obrigatórios
    if (!form.nome || !form.email || !form.senha || !form.cpf) {
      alert("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    // Valida CPF
    if (!validarCPF(form.cpf)) {
      setErroCpf("CPF inválido. Verifique o número digitado.");
      return;
    }

    setLoading(true);

    try {
      // Monta objeto de envio
      const dadosParaEnviar = {
        nome: form.nome.trim(),
        email: form.email.trim(),
        senha: form.senha,
        telefone: `${codigoPais}${form.telefone.replace(/\D/g, "")}`,
        endereco: form.endereco.trim(),
        cpf: form.cpf.replace(/\D/g, ""),
        fotoPerfil: form.fotoPerfil || null
      };

      // Remove possíveis campos vazios
      Object.keys(dadosParaEnviar).forEach(
        (key) =>
          (dadosParaEnviar as any)[key] === "" &&
          delete (dadosParaEnviar as any)[key]
      );

      console.log("📦 Enviando dados ao backend:", dadosParaEnviar);

      // Envia requisição para a API
      const response = await api.post("/usuarios/cadastro", dadosParaEnviar);

      alert(`Usuário ${response.data.nome} cadastrado com sucesso!`);
      console.log("✅ Resposta da API:", response.data);

      if (onVoltar) onVoltar();
    } catch (error: any) {
      console.error("❌ Erro no cadastro:", error);
      const mensagem =
        error.response?.data?.message ||
        error.response?.data?.errors?.usuario?.[0] ||
        "Erro ao cadastrar usuário.";
      alert(mensagem);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-xl font-bold text-orange-700 mb-6 text-center">
          Cadastro Geral
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            name="nome"
            value={form.nome}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="NOME"
            required
          />

          <div className="flex gap-2">
            <select
              value={codigoPais}
              onChange={(e) => setCodigoPais(e.target.value)}
              className="px-3 py-2 border rounded-lg"
            >
              <option value="+55">🇧🇷 +55</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
            </select>

            <InputMask
              mask="(99) 99999-9999"
              value={form.telefone}
              onChange={handleChange}
            >
              {(inputProps: any) => (
                <input
                  {...inputProps}
                  name="telefone"
                  type="tel"
                  className="flex-1 px-3 py-2 border rounded-lg"
                  placeholder="Número"
                />
              )}
            </InputMask>
          </div>

          <input
            name="endereco"
            value={form.endereco}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="ENDEREÇO"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="EMAIL"
            type="email"
            required
          />

          <input
            name="senha"
            value={form.senha}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="SENHA"
            type="password"
            required
          />

          <div>
            <InputMask mask="999.999.999-99" value={form.cpf} onChange={handleChange}>
              {(inputProps: any) => (
                <input
                  {...inputProps}
                  name="cpf"
                  type="text"
                  className={`w-full px-3 py-2 border rounded-lg ${
                    erroCpf ? "border-red-500" : ""
                  }`}
                  placeholder="CPF"
                  required
                />
              )}
            </InputMask>

            {erroCpf && <p className="text-red-500 text-sm mt-1">{erroCpf}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-orange-600 text-white py-2 rounded-lg 
              ${
                loading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-orange-700"
              } font-medium`}
          >
            {loading ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>

        {onVoltar && (
          <button
            onClick={onVoltar}
            className="mt-4 text-orange-600 hover:underline text-sm"
          >
            Voltar
          </button>
        )}
      </div>
    </div>
  );
};

export default TelaDeCadastroGERAL;
