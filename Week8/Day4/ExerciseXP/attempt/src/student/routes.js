const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getStudents);
router.get("/:id", controller.getStudentsId);
router.post("/", controller.addStudent);
router.delete("/:id", controller.deleteStudent);
router.put("/:id", controller.updateStudent);

module.exports = router;
