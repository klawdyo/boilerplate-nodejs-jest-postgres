const routes = require('express').Router()

const authMiddleware = require('./app/middleware/auth')

const SessionController = require('./app/controllers/SessionController')

routes.post('/sessions', SessionController.store)

// aplica necessidade de autenticação a todas as rotas a partir daqui
routes.use(authMiddleware)

routes.get('/dashboard', (req, res) => res.status(200).send())
module.exports = routes;
