const { Class, Student } = require('../models')

const CreateClass = async (req, res) => {
  try {
    console.log({ ...req.body })
    const lesson = await Class.create({ ...req.body })
    res.send(lesson)
  } catch (error) {
    throw error
  }
}

const GetClasses = async (req, res) => {
  try {
    const classes = await Class.findAll()
    res.send(classes)
  } catch (error) {
    throw error
  }
}

const GetClassById = async (req, res) => {
  try {
    const classId = parseInt(req.params.id)
    const singleClass = await Class.findByPk(classId)
    res.send(singleClass)
  } catch (error) {
    throw error
  }
}

const GetStudentsByClass = async (req, res) => {
  try {
    const classId = parseInt(req.params.id)
    const singleClass = await Student.findAll({
      include: [
        {
          model: Class,
          attributes: ['id']
        },
      ]
    })
    res.send(singleClass)
  } catch (error) {
    throw error
  }
}

const UpdateClass = async (req, res) => {
  console.log('update')
  try {
    let classId = parseInt(req.params.class_id)
    const updatedClass = await Class.update(
      { ...req.body },
      {
        where: { id: classId },
        returning: true
      }
    )
    res.send(updatedClass)
  } catch (error) {
    throw error
  }
}

// DELETE review
const DeleteClass = async (req, res) => {
  try {
    let classId = parseInt(req.params.class_id)
    await Class.destroy({ where: { id: classId } })
    res.send({ message: `Deleted class with an ID of ${classId}!` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateClass,
  GetClasses,
  GetClassById,
  GetStudentsByClass,
  UpdateClass,
  DeleteClass
}
