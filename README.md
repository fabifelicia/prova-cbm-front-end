<p align='center'>
  <img src='./front-end/src/pages/Home/assets/logo.png'/> 
</p>

<h1 align='center'>

   CBMSE 2022 - Challenge
</h1>

<p align='center'>  
  <img src="https://img.shields.io/badge/status-em_andamento-yellow"/>
</p>

> Status do Projeto: 🟡: (em andamento)
## Tópicos

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Rotas da Requisição](#rotas-da-requisição)

:small_blue_diamond: [Tecnologias Utilizadas](#tecnologias-utilizadas)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

## Descrição do projeto 

<p align="justify">
  Projeto desenvolvido como desafio proposto pela SergipeTec - CBMSE

  Construção de uma aplicação web de cadastro de candidatos para compor um curriculo, baseado no prototipo hospedado no Figma [(Link)](https://www.figma.com/file/5TVAkg1MawaEpuMpUDEK3J/Prova-CBM-Front-end?node-id=0%3A1).

</p>

## Funcionalidades
- O projeto desenvolvido tem a finalidade de cadastrar dados de um candidato.

- O sistema precisa estar apto para cadastrar os candidatos. Ao escolher se cadastrar, uma nova página será apresentada para ele preencher seu dados pessoais.

- Após inclusão dos dados, o usuario navegará para a próxima página, que deverá ser preenchida com dados da sua experiência e formação, incluindo também suas competências/tecnologias. 

- Após o preenchimento, o usuário fará um resumo de sua trajetória profissional, na página seguinte. 

- Por fim, o candidato será levado a uma página que apresentará seus dados em formato de currículo.

- O usuário poderá também visualizar a lista de candidatos cadastrados, podendo visualizar o currículo de um determinado candidato. 

## Rotas da Requisição
Existe uma pasta **server** onde existe um mock de uma api com os end-points nescessários. Para executar basta acessar a pasta pelo terminal e colocar os comandos `npm install` e `npm start` e, após isso, basta acessar a url: `http://localhost:6666`

### Listar candidatos/signos/tipos sanguineos/competencias

`GET /perfil` - retorna os dados do candidato

`GET /signos` - retorna a lista dos signos para ser escolhido pelo candidato

`GET /tipos-sanguineos` - retorna a lista dos tipos sanguineos para ser escolhido pelo candidato

`GET /competencias`  - retorna as competências/tecnologias que o candidato pode apresentar

## Tecnologias Utilizadas

:heavy_check_mark: [React](https://pt-br.reactjs.org/)

:heavy_check_mark: [React-Router-Dom](https://v5.reactrouter.com/web/guides/quick-start)

:heavy_check_mark: [React-Bootstrap](https://react-bootstrap.github.io/)

:heavy_check_mark: [Styled-Components](https://styled-components.com/)

:heavy_check_mark: [SweetAlert2](https://sweetalert2.github.io/)


## Como rodar a aplicação :arrow_forward:

No terminal, clone o projeto: 

```
git clone https://github.com/fabifelicia/prova-cbm-front-end.git
```
Entre na pasta do projeto front-end e utilize o npm install para instalar as dependências do projeto. Faça o mesmo para a pasta server

```
npm install
```
Após, inicie ambos os projetos com o seguinte comando:

```
npm start

```
## Desenvolvedores/Contribuintes :octocat:

[<img src="https://avatars.githubusercontent.com/u/39680930?v=4" width=115><br><sub>Fabiana Barreto</sub>](https://github.com/fabifelicia)

Copyright :copyright: 2022 - CBMSE

[![CodeFactor](https://www.codefactor.io/repository/github/fabifelicia/prova-cbm-front-end/badge)](https://www.codefactor.io/repository/github/fabifelicia/prova-cbm-front-end)
