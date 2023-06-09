const Router = require('express').Router()
const controller = require('../controllers/ClassController')

Router.post('/', controller.CreateClass)
Router.get('/get-classes', controller.GetClasses)
Router.get('/get-classes/:id', controller.GetClassById)
Router.get('/get-classes/:id/grades', controller.GetStudentsWithGradesByClass)
Router.get('/get-classes/:id/students', controller.GetStudentsByClass)

Router.get('/classes/:class_id/forstudent/:student_id', controller.getCoursesForStudent)


Router.delete('/delete-class', controller.DeleteClass)
Router.post('/update-class', controller.UpdateClass)

module.exports = Router
