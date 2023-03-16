const router = require('express').Router()
const controller = require('../controllers/ClassListController')

router.get('/:classlist_id', controller.GetClassListById)

router.post('/:user_id/:class_id', controller.CreateClassList)

router.delete('/:user_id/:class_id', controller.DeleteClassList)

module.exports = router
