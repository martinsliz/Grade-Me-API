const Router = require('express').Router()
const controller = require('../controllers/ClassController')

Router.post('/', controller.CreateClass)
Router.get('/get-classes', controller.GetClasses)

Router.delete('/delete-class', controller.DeleteClass)
Router.post('/update-class', controller.UpdateClass)

module.exports = Router
