# Avenue - Desafio QA

**O desafio será divido em 3 partes:**
 - Plano de teste
 - Automação web
 - Automação api

## Plano de Teste
Para o plano de teste, escolhi as seguintes jornadas:

**1** - Jornada 1: Abertura de Conta

Nesta jornada, um cliente em potencial decide abrir uma conta na Avenue para começar a investir nos EUA.
Essa jornada é crítica, pois representa o primeiro contato do cliente com a plataforma e é crucial para
a obtenção das informações necessárias para cumprir as regulamentações de conformidade e KYC (Know Your Customer).

**2** - Jornada 2: Realização de uma Transação

Nesta jornada, um cliente deseja comprar ações de uma empresa listada nos EUA. 
Essa jornada é importante porque representa a ação central do cliente na plataforma - realizar transações de investimento.

**3** - Jornada 3: Retirada de Fundos

Nesta jornada, um cliente decide retirar parte de seus fundos investidos na plataforma Avenue. 
Essa jornada é crítica porque envolve a movimentação de dinheiro do cliente e requer segurança e precisão.

**Escolha da Jornada: Abertura de Conta**

Eu escolhi a jornada de "Abertura de Conta" como a mais importante e crítica porque é o primeiro passo fundamental para que um cliente possa utilizar a plataforma Avenue. 
Uma abertura de conta bem-sucedida garante que a Avenue possua informações precisas sobre o cliente, cumprindo as regulamentações de conformidade e KYC, 
ao mesmo tempo que proporciona uma experiência positiva desde o início.

Segue mapa mental com os seguintes cenários:

<img width="1352" alt="Captura de Tela 2023-08-07 às 22 22 37" src="https://github.com/hllsouza/avenue-challenge/assets/29413179/636570d3-fbf8-43eb-8ffa-d75503839ebb">

## Automação web e api

### Pré-requisitos

Para clonar e rodar este projeto, você irá precisar:

- [git](https://git-scm.com/downloads) (Eu usei a versão `2.30.1` enquanto escrevia este documento)
- [Node.js](https://nodejs.org/en/) (Eu usei a versão `v14.17.0` enquanto escrevia este documento)
- npm (Eu usei a versão `6.14.13` enquanto escrevia este documento)

**Note:** Quando instalamos o Node.js, npm é automaticamente instalado. 🚀

### Instalação

Para instalar as dependências do projeto, rode no terminal na raiz do projeto `npm install` (ou `npm i`)

### Configuração das variáveis de ambiente

Antes de rodar os testes, algumas variáveis de ambiente precisam ser configuradas.

Faça uma cópia do [`.env.example`](./api/.env.example) como `.env.example`, e defina os valores apropriados para todas as variáveis. Não esqueça de tirar o `.example` do arquivo.

**Observação:** O arquivo `.env` não é rastreado pelo git, pois está listado no arquivo `.gitignore`.

### Rodando os testes

Neste projeto, você pode rodar os testes interagindo com o browser ou em modo headless.

#### Modo headless 

- Testes de API:
Execute o seguinte comando no terminal na raiz do projeto `npm run e2e:api:headless`.

- Testes Web Amazon:
Execute o seguinte comando no terminal na raiz do projeto `npm run e2e:amazon:headless`.

- Testes Web Avenue:
Execute o seguinte comando no terminal na raiz do projeto `npm run e2e:avenue:headless`.

#### Modo interagindo com o browser

- Testes de API:
Execute o seguinte comando no terminal na raiz do projeto `npm run e2e:open:api`.

- Testes de WEB:
Execute o seguinte comando no terminal na raiz do projeto `npm run e2e:open:web`.

### Estrutura de diretórios

```
avenue-challenge/
 ├─ .github/
 |   ├─ workflows
 |      └─ cypress-e2e.yml
 ├─ api/
 |   ├─ cypress
 |       ├─ e2e
 |            └─ weather.cy.js
 |       ├─ support
 |            ├─ commands.js
 |            └─ e2e.js
 |      .env.example
 |      cypress.config.js
 ├─ web/
 |   ├─ cypress
 |       ├─ e2e
 |            ├─ amazon.cy.js
 |            └─ avenue.cy.js
 |       ├─ support
 |            ├─ commands.js
 |            └─ e2e.js
 |      cypress.config.js
 ├─ .gitignore
 └─ package.json
```

## Dashboard de Automação de Testes

<img width="1788" alt="Captura de Tela 2023-08-07 às 23 16 11" src="https://github.com/hllsouza/avenue-challenge/assets/29413179/f3ea4a55-7e5c-4000-b7a1-c8c8b6beb4d7">

<img width="1792" alt="Captura de Tela 2023-08-07 às 23 16 50" src="https://github.com/hllsouza/avenue-challenge/assets/29413179/ef1f3bca-a2aa-45b4-ba5c-59c451472d8e">

<img width="1789" alt="Captura de Tela 2023-08-07 às 23 17 26" src="https://github.com/hllsouza/avenue-challenge/assets/29413179/53aca586-cb71-49dd-b3ee-9ade6fb07ae7">

<img width="1785" alt="Captura de Tela 2023-08-07 às 23 17 52" src="https://github.com/hllsouza/avenue-challenge/assets/29413179/87e54c2e-0f03-4f5e-ae91-abf6882aa4e8">

<img width="1787" alt="Captura de Tela 2023-08-07 às 23 18 43" src="https://github.com/hllsouza/avenue-challenge/assets/29413179/1188652a-3b98-4cbd-8e4d-835eeb0a8b1f">

<img width="1786" alt="Captura de Tela 2023-08-07 às 23 19 11" src="https://github.com/hllsouza/avenue-challenge/assets/29413179/06625a1b-1845-4ba4-8992-a547ae73da6f">

