const { Class } = require('../models')

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
  UpdateClass,
  DeleteClass
}
