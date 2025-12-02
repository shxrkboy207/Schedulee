import React from "react";

const TermosDeUso: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Termos de Uso</h1>

      <div className="prose max-w-4xl mx-auto">
        <h2>1. Descrição do Serviço</h2>
        <p>
          Este documento estabelece os termos e condições para o uso deste
          site/aplicativo ("Plataforma"). A Plataforma oferece serviços digitais
          que permitem ao usuário acessar, consultar, interagir ou utilizar
          funcionalidades específicas disponibilizadas pela empresa. O acesso ao
          serviço pode requerer conexão à internet e dispositivos compatíveis,
          cuja responsabilidade é exclusivamente do usuário.
        </p>
        <p>
          Ao utilizar a Plataforma, o usuário declara ter lido, compreendido e
          aceitado integralmente estes Termos de Uso.
        </p>

        <h2>2. Propriedade Intelectual</h2>
        <p>
          Todo o conteúdo presente na Plataforma, incluindo textos, imagens,
          gráficos, logotipos, ícones, interfaces, software, códigos-fonte e
          demais materiais, é protegido por direitos autorais, marcas registradas
          e outras leis de propriedade intelectual.
        </p>
        <p>
          Nenhum conteúdo poderá ser copiado, reproduzido, distribuído,
          modificado, exibido ou utilizado para qualquer finalidade sem
          autorização expressa e por escrito da empresa.
        </p>

        <h2>3. Responsabilidades das Partes</h2>

        <h3>3.1 Responsabilidades do Usuário</h3>
        <ul>
          <li>Utilizar a Plataforma de forma lícita e adequada;</li>
          <li>Fornecer informações verdadeiras e atualizadas quando necessário;</li>
          <li>
            Respeitar direitos de terceiros e normas legais aplicáveis;
          </li>
          <li>
            Não tentar burlar sistemas de segurança, explorar vulnerabilidades
            ou usar a Plataforma para fins ilícitos.
          </li>
        </ul>

        <h3>3.2 Responsabilidades da Empresa</h3>
        <ul>
          <li>Disponibilizar a Plataforma conforme descrito nestes Termos;</li>
          <li>
            Empregar esforços razoáveis para manter o funcionamento contínuo e
            seguro da Plataforma;
          </li>
          <li>
            Tratar os dados pessoais dos usuários de acordo com a legislação
            aplicável e com sua Política de Privacidade.
          </li>
        </ul>

        <h2>4. Regras de Conduta</h2>
        <p>O usuário se compromete a não:</p>
        <ul>
          <li>
            Publicar, transmitir ou compartilhar conteúdos ofensivos, ilegais,
            discriminatórios, difamatórios ou que violem direitos de terceiros;
          </li>
          <li>
            Enviar spam, vírus, malware ou qualquer conteúdo que comprometa a
            segurança da Plataforma;
          </li>
          <li>
            Usar a Plataforma de forma que prejudique seu desempenho ou a
            experiência de outros usuários.
          </li>
        </ul>

        <h2>5. Limitação de Responsabilidade</h2>
        <p>
          A empresa não se responsabiliza por danos decorrentes de mau uso da
          Plataforma pelo usuário; interrupções, falhas ou indisponibilidades
          causadas por fatores externos; e conteúdos publicados por usuários.
        </p>
        <p>
          Em nenhuma hipótese a empresa será responsável por perdas indiretas,
          lucros cessantes ou quaisquer danos não diretamente atribuíveis à sua
          atuação.
        </p>

        <h2>6. Tratamento de Dados Pessoais</h2>
        <p>
          Os dados pessoais coletados serão tratados conforme a LGPD e a
          Política de Privacidade, que detalha como são coletados, usados,
          compartilhados e protegidos.
        </p>

        <h2>7. Informações de Contato</h2>
        <ul>
          <li>E-mail: suporte@empresa.com</li>
          <li>Telefone: (00) 0000-0000</li>
          <li>Endereço: Rua Exemplo, nº 123, Cidade – Estado</li>
        </ul>

        <h2>8. Alterações dos Termos de Uso</h2>
        <p>
          Os termos podem ser atualizados a qualquer momento. O uso contínuo da
          Plataforma após alterações constitui aceitação das novas condições.
        </p>

        <h2>9. Referência a Outras Políticas</h2>
        <p>
          Estes Termos devem ser lidos em conjunto com a Política de Privacidade
          e Política de Cookies.
        </p>

        <h2>10. Definições</h2>
        <ul>
          <li>
            <b>Plataforma</b>: site, aplicativo ou sistema disponibilizado pela
            empresa.
          </li>
          <li>
            <b>Usuário</b>: pessoa física ou jurídica que utiliza a Plataforma.
          </li>
          <li>
            <b>Dados Pessoais</b>: informações relacionadas à pessoa natural
            identificada ou identificável.
          </li>
          <li>
            <b>Conteúdo Gerado pelo Usuário</b>: informações, textos, imagens,
            vídeos ou materiais enviados ou publicados pelo usuário.
          </li>
        </ul>

        <p className="mt-10 italic">
          Estes Termos entram em vigor na data de sua publicação e permanecem
          válidos até substituição por nova versão.
        </p>
      </div>
    </div>
  );
};

export default TermosDeUso;
