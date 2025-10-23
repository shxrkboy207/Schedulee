import React, { useState } from "react";
import InputMask from "react-input-mask";

interface TelaDeCadastroGERALProps {
  onVoltar?: () => void;
}

const TelaDeCadastroGERAL: React.FC<TelaDeCadastroGERALProps> = ({ onVoltar }) => {
  const [cpf, setCpf] = useState("");
  const [erroCpf, setErroCpf] = useState("");
  const [telefone, setTelefone] = useState("");

  
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

  
  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setCpf(valor);
    setErroCpf("");
  };

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validarCPF(cpf)) {
      setErroCpf("CPF inválido. Verifique o número digitado.");
      return;
    }

    alert("Formulário enviado com sucesso!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-xl font-bold text-orange-700 mb-6 text-center">
          Cadastro Geral
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input className="w-full px-3 py-2 border rounded-lg" placeholder="NOME" />

          
          <div className="flex gap-2">
            <select className="px-3 py-2 border rounded-lg">
              <option value="+55">🇧🇷 +55</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
            </select>

            <InputMask
              mask="(99) 99999-9999"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            >
              {(inputProps: any) => (
                <input
                  {...inputProps}
                  type="tel"
                  className="flex-1 px-3 py-2 border rounded-lg"
                  placeholder="Número"
                />
              )}
            </InputMask>
          </div>

          <input
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="ENDEREÇO"
          />
          <input
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="EMAIL"
            type="email"
          />

          
          <div>
            <InputMask
              mask="999.999.999-99"
              value={cpf}
              onChange={handleCpfChange}
            >
              {(inputProps: any) => (
                <input
                  {...inputProps}
                  type="text"
                  className={`w-full px-3 py-2 border rounded-lg ${
                    erroCpf ? "border-red-500" : ""
                  }`}
                  placeholder="CPF"
                />
              )}
            </InputMask>

            {erroCpf && (
              <p className="text-red-500 text-sm mt-1">{erroCpf}</p>
            )}
          </div>

          <button className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 font-medium">
            Cadastrar
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
