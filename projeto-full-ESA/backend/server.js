//criação do framework express, que facilita criar um servidor http no node.js:
const express = require("express");

//importa o cors que irá nos possibilitar que o frontend (react) possa se comunicar com o backend sem bloqueios:
const cors = require("cors");

//cria a aplicação express, que será o nosso servidor:
const app = express();
