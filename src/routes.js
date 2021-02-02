const routes = require('express').Router()

const SessionController = require('./app/controllers/SessionController')

onmsgesturestart.post('/sessions', (req, res))
routes.post('/sessions', SessionController.store)


module.exports = routes