💰 DevFinance Automation - Cypress Project
Este repositório contém a automação de testes para a aplicação DevFinance, uma plataforma de gestão financeira pessoal. O objetivo deste projeto é garantir a qualidade das funcionalidades principais, como o controle de entradas, saídas e exclusão de transações.

URL da Aplicação: https://dev-finance.netlify.app/

🚀 Funcionalidades Testadas
O escopo da automação abrange os seguintes cenários:

Inserir Transações: Validação do fluxo de cadastro de novas entradas e saídas, verificando se os valores são refletidos corretamente na tabela e no saldo total.

Cancelar Operação: Verificação da integridade dos dados ao desistir de uma inclusão, garantindo que o formulário seja fechado sem persistir informações indesejadas.

Remover Transações: Teste de exclusão de registros existentes, validando se a linha é removida do DOM e se os cálculos financeiros são atualizados.

🛠️ Tecnologias e Dependências
Para a execução deste projeto, utilizamos as seguintes ferramentas:

JavaScript (Node.js): Linguagem base para a construção dos scripts.

Cypress: Framework de automação de testes End-to-End.

Versões mínimas recomendadas:

Node.js: v18.x ou superior.

Cypress: v12.x ou superior.

📦 Como Instalar e Rodar
Clonar o repositório:

Bash
git clone https://github.com/felipevvictor/cypress-app_devfinance.git
Instalar as dependências:

Bash
npm install
Abrir o Cypress (Interface Gráfica):

Bash
npx cypress open
Rodar em modo Headless (Terminal):

Bash
npx cypress run
🏗️ Estrutura do Projeto
/cypress/e2e: Contém os arquivos de especificação de testes (.cy.js).

/cypress/support: Comandos customizados e configurações globais para otimização do código.
