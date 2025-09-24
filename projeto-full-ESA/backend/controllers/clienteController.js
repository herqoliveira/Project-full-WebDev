let clientes = require("../models/clienteModel");
// ↑ importa a lista de clientes da model 

const listarClientes = (req, res) => {
    res.json(clientes);
    // ↑ responde com a lista completa de clientes no formato JSON
};

const adicionarCliente = (req, res) => {
    const {nome, email, empresa} = req.body;
    // ↑ extrai os dados vindos do front-end 

    const novoCliente = {id: clientes.length + 1, nome, email, empresa};
    // ↑ cria um novo cliente com id automático

    clientes.push(novoCliente);
    // ↑ adiciona o novo cliente ao "banco de dados" (array) 🤣

    res.status(201).json(novoCliente);
    // ↑ responde para o front-end confirmando que o novo cliente foi criado
};

module.exports = {listarClientes, adicionarCliente}
// ↑ exportamos as funções para serem usadas em outras partes do sistema