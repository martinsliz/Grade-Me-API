const Router = require('express').Router()
const controller = require('../controllers/ClassController')

Router.post('/create-class', controller.CreateClass)
Router.get('/get-class', controller.GetClass)

Router.delete('/delete-class', controller.DeleteClass)
Router.post('/update-class', controller.UpdateClass)

module.exports = Router
