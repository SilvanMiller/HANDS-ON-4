# HANDS-ON-4 - Parrot

A plataforma Parrot permite que os usuários façam publicações que fique visível para toda comunidade de condôminos.

## Tela Inicial

![image](https://user-images.githubusercontent.com/84871231/188913482-cb595bd5-6cac-4a3a-bd8c-19135614e68c.png); ![image](https://user-images.githubusercontent.com/84871231/188913698-4e4c5dba-2c6d-430b-803a-36b639a6e1e9.png)

## 🚀 Começando

Este projeto necessita de alguns passos para ser testado corretamente, conforme descrito abaixo:

    1. Banco de Dados Mysql instalado e configurado no ambiente a ser testado.
    2. Uma framework client para testes de API. Recomendado ( Insomnia ou Postman ), para interação com a API.
    3. Um editor de texto, para alteração do arquivo de conexão com o Banco de Dados ( Recomendado VSCODE).

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

    1. MySql.
    2. Insomnia ou Postman.
    3. VsCode.

### 🔧 Instalação Front-end
    - Após clonar o repositório, acesse via terminal a pasta cd parrot/ executar os comandos:
      npm install, npm install react-bootstrap bootstrap,npm install -D sass, npm install axios, npm install @reduxjs/toolkit react-redux,  
      npm install @types/react-redux -D, npm install --save-dev @types/styled-components, npm install -S yup, 
      npm install formik --save para instalar todas as dependências do projeto para o front-end.
    - Para iniciar o projeto basta no terminal executar npm run dev, com isso basta acessar o  ➜  Local: http://127.0.0.1:5173/

### 🔧 Instalação Back-end
    - Após clonar o repositório, acesse via terminal a pasta ./src/ executar o comando "npm install" para instalar todas as dependências do projeto.
    - Necessário alterar credenciais do banco de dados no arquivo .env
    - Criar banco de dados dentro do MySql com o seguinte nome: parrot e deixar o banco vazio.
    - No terminal, rodar os comandos, todos sem aspas:
    - "npm run migration:generate" e em seguida "npm run migration:run" para gerar as tabelas com as migrations;
    - "npm run seed" para popular o banco com um usuário ADMIN com login: admin@admin.com e senha admin.
    - Para iniciar o servidor da API via script, acesse o terminal e execute o seguinte comando: npm run dev.
    
    
## 📦 Documentação da API

      https://documenter.getpostman.com/view/21642567/VVBUySTW


## ✒️ Autores<br>
*⌨️ por **Jocival Santos** - *Front-end - Documentação* - [Jocival Santos](https://github.com/jocival)<br>
*⌨️ por **Silvan Miller** - *Front-end - Documentação* - [Silvan Miller](https://github.com/SilvanMiller)<br><br>
*⌨️ com ❤️ por **Amanda Hammes** - *Node.JS - Documentação* - [Amanda Hammes](https://github.com/amandahammes/)<br>
*⌨️ por **Daniel Junior** - *Node.JS - Documentação* - [Daniel Junior](https://github.com/)<br>




