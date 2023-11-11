const pool = require("../../db");
const queries = require("./queries");

const getStudents = (req, res) => {
  pool.query(queries.getStudents, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getStudentsId = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentsId, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;
  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      res.send("email already exists");
    }
    pool.query(
      queries.addStudent,
      [name, email, age, dob],
      (error, results) => {
        if (error) throw error;
        res.status(201).send("student created");
      }
    );
  });
};

const deleteStudent = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentsId, [id], (error, results) => {
    const notFound = !results.rows.length;
    if (notFound) {
      res.send("not a student");
    }
    pool.query(queries.deleteStudent, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("deleted");
    });
  });
};

const updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  pool.query(queries.getStudentsId, [id], (error, results) => {
    const notFound = !results.rows.length;
    if (notFound) {
      res.send("not a student");
    }
    pool.query(queries.updateStudent, [name, id], (error, results) => {
      if (error) throw error;
      res.status(200).send("updated");
    });
  });
};

module.exports = {
  getStudents,
  getStudentsId,
  addStudent,
  deleteStudent,
  updateStudent,
};
