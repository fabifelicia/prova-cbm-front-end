<p align='center'>
  <img src='./src/pages/Home/assets/logo.png'/> 
</p>

<h1 align='center'>

   CBMSE 2022 - Challenge
</h1>

<p align='center'>  
  <img src="https://img.shields.io/badge/status-em_andamento-yellow"/>
</p>

> Status do Projeto: :heavy_check_mark: (em andamento)
## Tópicos

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Rotas da Requisição](#rotas-da-requisição)

:small_blue_diamond: [Tecnologias Utilizadas](#tecnologias-utilizadas)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

## Descrição do projeto 

<p align="justify">
  Projeto desenvolvido como desafio proposto pela SergipeTec - CBMSE

  Construção de uma aplicação web de cadastro de clientes.
</p>

## Funcionalidades


## Rotas da Requisição


## Tecnologias Utilizadas

:heavy_check_mark: [React ](https://nodejs.org/en/download/)

:heavy_check_mark: [Bootstrap](https://www.npmjs.com/package/express)

:heavy_check_mark: [Styled-Components](https://node-postgres.com/)


## Como rodar a aplicação :arrow_forward:

No terminal, clone o projeto: 

```
git clone https://github.com/fabifelicia/case-pipo.git
```

Utilize o npm install para instalar as dependências do projeto.

```
npm install
```
### Iniciando/Configurando o banco de dados

Para o banco de dados utilizei o ElephantSQL, um serviço de hospedagem de banco de dados PostgreSQL gratuito, que permite armazenar dados de forma estruturada  que podem ser facilmente acessados, gerenciados e atualizados.

Para isso, basta fazer o login na plataforma e criar uma nova instância. Após essa etapa, nomeia o projeto e escolhe o plano grátis (Tiny Turtle). Seleciona a região, que já vem configurada por default e clica em criar instância.

Após criação, abre-se a instância, copia a url disponibilizada e cola no projeto (arquivo .env)

No menu lateral, escolhe a opção Browser, que abre uma caixa de texto para inserir as queries. Nesse momento, deve-se criar as tabelas que estão no arquivo sql/init.sql, para que a aplicação funcione.

Em seguida, crie um arquivo .env, na raiz do seu projeto e insira as varíaveis de ambiente PORT=(porta que rodará a aplicação) e a CONNECTION_API=(string de conexão com banco de dados, copiada anteriormente)

Logo apos essas configuraçoes, inicie o projeto.

```
npm start

```
## Desenvolvedores/Contribuintes :octocat:

[<img src="https://avatars.githubusercontent.com/u/39680930?v=4" width=115><br><sub>Fabiana Barreto</sub>](https://github.com/fabifelicia)

Copyright :copyright: 2022 - CBMSE

[![CodeFactor](https://www.codefactor.io/repository/github/fabifelicia/case-pipo/badge)](https://www.codefactor.io/repository/github/fabifelicia/case-pipo)