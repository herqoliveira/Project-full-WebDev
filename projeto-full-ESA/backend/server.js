const express = require("express");
// ↑ criação do framework express, que facilita criar um servidor http no node.js

const cors = require("cors");
// ↑ importa o cors que irá nos possibilitar que o frontend (react) possa se comunicar com o backend sem bloqueios

const app = express();
// ↑ cria a aplicação express, que será o nosso servidor

app.use(cors());
// ↑ habilita o cors que possibilita que o front-end acesse à API sem restrições de segurança

const clienteRoutes = require("./routes/clienteRoutes");
// ↑ importa as rotas do cliente que criamos em outro arquivo 

app.use("clientes", clienteRoutes);
// ↑ toda vez que eu acessar /clientes, serei redirecionado para as rotas dos clientes

const PORT = 5000;
// ↑ define a porta do servidor(5000) 

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

