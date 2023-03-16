const { Student } = require('../models')

const CreateStudent = async (req, res) => {
  try {
    console.log({ ...req.body })
    const student = await Student.create({ ...req.body })
    res.send(student)
  } catch (error) {
    throw error
  }
}

const GetStudents = async (req, res) => {
  try {
    const students = await Student.findAll()
    res.send(students)
  } catch (error) {
    throw error
  }
}

const UpdateStudent = async (req, res) => {
  console.log('student')
  try {
    let studentId = parseInt(req.params.student_id)
    const updatedStudent = await Student.update(
      { ...req.body },
      {
        where: { id: studentId },
        returning: true
      }
    )
    res.send(updatedStudent)
  } catch (error) {
    throw error
  }
}

// DELETE review
const DeleteStudent = async (req, res) => {
  try {
    let studentId = parseInt(req.params.student_id)
    await Student.destroy({ where: { id: studentId } })
    res.send({ message: `Deleted student with an ID of ${studentId}!` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateStudent,
  GetStudents,
  UpdateStudent,
  DeleteStudent
}
