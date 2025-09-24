const express = require("express");
// ↑ importar o servidor

const router = express.Router();
// ↑ cria um 'mini-servidor' de rotas

const {listarClientes, adicionarCliente} = require("../controllers/clienteController.js");
// ↑ importa as funções do clienteController