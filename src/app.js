// Observações:
// - Não configura a porta para que nos testes o servidor não suba na mesma porta
// - Os testes irão rodar sem ocupar uma porta, executando os métodos diretamente.

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})
const express = require('express')

class AppController {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require('./routes'));
  }
}

module.exports = new AppController().express;
