let clientes = require("../models/clienteModel");
// ↑ importa a lista de clientes da model 

const listarClientes = (req, res) => {
    res.json(clientes);
    // ↑ responde com a lista completa de clientes no formato JSON
};

const adicionarCliente = (req, res) => {
    const {nome, email, empresa} = req.body;
    // ↑ extrai os dados vindos do front-end 
};