const router = require('express').Router()
const controller = require('../controllers/ClassListController')

router.get('/:classlist_id', controller.GetClassListById)
router.post('/:student_id/classes/:class_id', controller.AssignClassToStudent)

router.post('/:student_id/:class_id', controller.CreateClassList)

router.delete('/:student_id/:class_id', controller.DeleteClassList)

module.exports = router
