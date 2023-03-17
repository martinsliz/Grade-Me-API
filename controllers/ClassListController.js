const { ClassList, Student, Class } = require('../models')

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
const AssignGrade = async (req, res) => {
  try {
    const classlist = await ClassList.update(
      { ...req.body },
      {
        where: { studentId: +req.params.studentId, classId: +req.params.classId },
        returning: true,
      }
    );
    console.log(classlist)
    res.send(classlist);
  } catch (error) {
    throw error;
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
    const classList = await ClassList.create({
      classId,
      studentId
    })
    res.send(classList)
  } catch (error) {
    throw error
  }
}
const getStudentInfo = async (req, res) => {
  try {
    const studentId = parseInt(req.params.studentId);
    const classId = parseInt(req.params.classId);
    const gradeInfo = await ClassList.findOne({
      where: { studentId: studentId, classId: classId },
      attributes: ['grade'],
    });
    const studentInfo = await Student.findByPk(studentId)
    if (!studentInfo) {
      return res.status(404).send({ message: 'Student info not found.' });
    }

    res.send({ gradeInfo, studentInfo });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal server error.' });
  }
};

const getStudentGrade = async (req, res) => {
  try {
    const studentId = parseInt(req.params.studentId);
    const studentGrade = await ClassList.findAll({
      where: { studentId: studentId },
      // attributes: ['grade'],
    });

    if (!studentGrade) {
      return res.status(404).send({ message: 'Student grades not found.' });
    }

    res.send(studentGrade);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal server error.' });
  }
};

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
  DeleteClassList,
  AssignGrade,
  getStudentInfo,
  getStudentGrade
}
