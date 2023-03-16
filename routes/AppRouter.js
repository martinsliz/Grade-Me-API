const Router = require('express').Router()
const ClassRouter = require('./ClassRouter')
const StudentRouter = require('./StudentRouter')

Router.use('/student', StudentRouter)
Router.use('/class', ClassRouter)

module.exports = Router
