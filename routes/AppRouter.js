const Router = require('express').Router()
const ClassRouter = require('./ClassRouter')
const StudentRouter = require('./StudentRouter')
const ClassListRouter = require('./ClassListRouter')

Router.use('/student', StudentRouter)
Router.use('/class', ClassRouter)
Router.use('/classlists', ClassListRouter)

module.exports = Router
