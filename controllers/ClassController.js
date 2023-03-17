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
// const getGradeStudentInfo = async (req, res) => {
//   try {
//     const studentId = parseInt(req.params.studentId);
//     const classId = parseInt(req.params.classId);
//     const classInfo = await Class.findByPk(classId)
//     const gradeInfo = await ClassList.findOne({
//       where: { studentId: studentId, classId: classId },
//       attributes: ['grade'],
//     });
//     const studentInfo = await Student.findByPk(studentId)
//     if (!studentInfo) {
//       return res.status(404).send({ message: 'Student info not found.' });
//     }

//     res.send({ classInfo, gradeInfo, studentInfo });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: 'Internal server error.' });
//   }
// };
const getCoursesForStudent = async (req, res) => {
  try {
    const classId = parseInt(req.params.class_id)
    const studentId = parseInt(req.params.student_id)
    const classe = await Class.findByPk(classId)
    const student = await Student.findByPk(studentId)
    if (!student) {
      return res.status(404).send('Student not found')
    }

    const classes = await Class.findAll({
      include: [
        {
          model: ClassList,
          where: {
            classId: classId
          }
        }
      ]
    })

    res.send(classes)
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
}

const GetStudentsWithGradesByClass = async (req, res) => {
  try {
    const classId = parseInt(req.params.id)
    const singleClass = await Class.findByPk(classId, {
      include: [
        {
          model: Student,
          as: 'students',
          attributes: ['id', 'name', 'email'],
          through: { attributes: [] }
        }
      ]
    })
    const studentsWithGrades = singleClass.students.map((student) => ({
      id: student.id,
      name: student.name,
      email: student.email,
      grade: singleClass.grade
    }))
    res.send(studentsWithGrades)
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
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
          attributes: ['id', 'name', 'email'],
          through: {
            model: ClassList,
            as: 'classlists',
            attributes: []
          }
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
  GetStudentsByClass,
  GetStudentsWithGradesByClass,
  getCoursesForStudent
}
