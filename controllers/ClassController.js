const { Class, Student, ClassList } = require('../models')

const CreateClass = async (req, res) => {
  try {
    console.log({ ...req.body })
    const lesson = await Class.create({ ...req.body })
    res.send(lesson)
  } catch (error) {
    throw error
  }
}
const AssignGrade = async (req, res) => {
  try {
    const classId = parseInt(req.params.class_id)
    const studentId = parseInt(req.params.student_id)
    const grade = req.body.grade

    const classInstance = await Class.findByPk(classId)
    const studentInstance = await Student.findByPk(studentId)
    if (!classInstance || !studentInstance) {
      return res.status(404).send('Class or student not found')
    }

    const classListEntry = await ClassList.findOne({
      where: {
        classId: classId,
        studentId: studentId
      }
    })
    if (!classListEntry) {
      return res.status(404).send('Class list entry not found')
    }
    classInstance.grade = grade
    await classInstance.save()

    res.send(classInstance)
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
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
    const classList = await Class.findOne({
      where: {
        id: classId
      },
      include: [
        {
          model: Student,
          as: 'students',
          attributes: ['id', 'name', 'email', 'gpa'],
          through: { attributes: [] }
        }
      ]
    })
    console.log(classList)
    res.send(classList.students)
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
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
  DeleteClass,
  AssignGrade
}
