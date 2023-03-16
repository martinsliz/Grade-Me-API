const Router = require('express').Router()
const controller = require('../controllers/StudentController')

Router.post('/create-student', controller.CreateStudent)
Router.get('/get-student', controller.GetStudent)

Router.delete('/delete-student', controller.DeleteStudent)
Router.post('/update-student', controller.UpdateStudent)

module.exports = Router
