const Router = require('express').Router()
const controller = require('../controllers/StudentController')

Router.post('/create-student', controller.CreateStudent)
Router.get('/get-students', controller.GetStudents)
Router.get('/get-students/:id', controller.GetStudentById)

Router.delete('/delete-student', controller.DeleteStudent)
Router.post('/update-student', controller.UpdateStudent)

module.exports = Router
