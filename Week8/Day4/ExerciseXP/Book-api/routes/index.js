const { Router } = require("express");
const controller = require("../controller/controller");

const router = Router();

router.get("/", controller.getBooks);
router.get("/:id", controller.getBookId);
router.post("/", controller.addBook);
router.delete("/:id", controller.deleteBook);
router.put("/:id", controller.updateBook);

module.exports = router;
