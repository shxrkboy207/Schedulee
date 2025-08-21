import React, { useEffect, useRef, useState } from "react";
import ParteDeCimaDaPagina from "./parteDeCimaDaPagina";

interface PaginaDeDicasProps {
  scrollTo?: string;
}

const PaginaDeDicas: React.FC<PaginaDeDicasProps> = ({ scrollTo }) => {
  const profissionalRef = useRef<HTMLDivElement>(null);
  const dicasRef = useRef<HTMLDivElement>(null);
  const vendasRef = useRef<HTMLDivElement>(null);

  
  const [activeTab, setActiveTab] = useState<"services" | "how-it-works">("services");
  const [showLogin, setShowLogin] = useState(false);
  const [showCadastro, setShowCadastro] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowCadastro(false);
  };

  const handleCadastroClick = () => {
    setShowCadastro(true);
    setShowLogin(false);
  };

  const handleVoltarParaServicos = () => {
    setShowLogin(false);
    setShowCadastro(false);
    setActiveTab("services");
  };

  useEffect(() => {
    if (scrollTo === "profissionais" && profissionalRef.current) {
      profissionalRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (scrollTo === "dicas" && dicasRef.current) {
      dicasRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (scrollTo === "vendas" && vendasRef.current) {
      vendasRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollTo]);

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="sticky top-0 z-50">
        <ParteDeCimaDaPagina
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onLoginClick={handleLoginClick}
          onCadastroClick={handleCadastroClick}
          isLoginActive={showLogin}
          onVoltarParaServicos={handleVoltarParaServicos}
        />
      </div>

      
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-orange-700 mb-8 text-center">Dicas para Profissionais</h1>

        <div ref={profissionalRef} id="profissionais" className="mb-12">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">🚀 Para Profissionais — Como Começar</h2>
          <p className="mb-2">
            Entrar no mercado digital pode parecer um desafio, mas os primeiros passos são simples. Comece criando um perfil profissional completo dentro da plataforma:
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>Apresente-se com clareza: descreva seus serviços de forma objetiva e mostre quais problemas você resolve.</li>
            <li>Use imagens de qualidade: fotos bem produzidas passam credibilidade e ajudam a destacar seu trabalho.</li>
            <li>Defina sua categoria e especialidade: isso facilita para que os clientes certos encontrem você.</li>
          </ul>
          <p>
            Quanto mais completo for o seu perfil, maior a chance de conquistar novos clientes rapidamente.
          </p>
        </div>

        <div ref={dicasRef} id="dicas" className="mb-12">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">💡 Dicas de Sucesso</h2>
          <ul className="list-disc list-inside mb-2">
            <li>Responda rápido: clientes valorizam agilidade no atendimento.</li>
            <li>Mantenha consistência: cumpra prazos, mantenha padrões de qualidade e seja transparente.</li>
            <li>Construa sua reputação: peça avaliações de clientes satisfeitos, pois depoimentos positivos aumentam sua credibilidade.</li>
            <li>Atualize seu portfólio: mostre sempre seus melhores trabalhos e projetos recentes.</li>
          </ul>
          <p>
            Essas atitudes criam confiança e transformam clientes ocasionais em parceiros recorrentes.
          </p>
        </div>

        <div ref={vendasRef} id="vendas" className="mb-12">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">📈 Aumentar Vendas</h2>
          <ul className="list-disc list-inside mb-2">
            <li>Use promoções inteligentes: descontos estratégicos podem atrair novos clientes sem comprometer seu lucro.</li>
            <li>Destaque diferenciais: mostre claramente o que torna seu serviço único em relação à concorrência.</li>
            <li>Invista em marketing digital: use redes sociais para divulgar seus serviços e redirecione clientes para seu perfil na plataforma.</li>
            <li>Valorize o relacionamento: acompanhe clientes após a venda, ofereça suporte e mantenha contato.</li>
          </ul>
          <p>
            Essas ações não só aumentam suas vendas, mas também fortalecem sua marca pessoal e criam uma base sólida de clientes fiéis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaginaDeDicas;