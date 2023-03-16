const { ClassList } = require('../models')

const GetClassListById = async (req, res) => {
  try {
    const classListId = parseInt(req.params.classlist_id)
    const classList = await ClassList.findOne({
      where: { id: classListId }
    })
    res.send(classList)
  } catch (error) {
    throw error
  }
}

const CreateClassList = async (req, res) => {
  try {
    let studentId = parseInt(req.params.student_id)
    let classId = parseInt(req.params.class_id)
    let classListBody = {
      studentId,
      classId
    }
    let classList = await ClassList.create(classListBody)
    res.send(classList)
  } catch (error) {
    throw error
  }
}

const AssignClassToStudent = async (req, res) => {
  try {
    const studentId = parseInt(req.params.student_id)
    const classId = parseInt(req.params.class_id)
    // const classListBody = {
    //   studentId,
    //   classId
    // }
    const classList = await ClassList.create({
      classId,
      studentId
    })
    res.send(classList)
  } catch (error) {
    throw error
  }
}

const DeleteClassList = async (req, res) => {
  try {
    let studentId = parseInt(req.params.student_id)
    let classId = parseInt(req.params.class_id)
    await ClassList.destroy({
      where: { studentId: studentId, classId: classId }
    })
    res.send({
      message: `Deleted class list with an student id of ${studentId} and class id of ${classId} `
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetClassListById,
  CreateClassList,
  AssignClassToStudent,
  DeleteClassList
}
