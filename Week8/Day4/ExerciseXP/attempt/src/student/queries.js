const getStudents = "select * from students";
const getStudentsId = "select * from students where ID = $1";
const checkEmailExists = "select s from students s where s.email = $1";
const addStudent =
  "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";
const deleteStudent = "DELETE from students where id = $1";
const updateStudent = "UPDATE students set name = $1 where id = $2";

module.exports = {
  getStudents,
  getStudentsId,
  checkEmailExists,
  addStudent,
  deleteStudent,
  updateStudent,
};
