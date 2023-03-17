const router = require('express').Router()
const controller = require('../controllers/ClassListController')

router.get('/:classlist_id', controller.GetClassListById)

router.get('/:studentId/class/:classId', controller.getStudentInfo)

router.get('/student/:studentId', controller.getStudentGrade)

router.post('/:student_id/classes/:class_id', controller.AssignClassToStudent)

router.post('/:student_id/:class_id', controller.CreateClassList)

router.put('/:studentId/class/:classId', controller.AssignGrade)

router.delete('/:student_id/:class_id', controller.DeleteClassList)

module.exports = router
