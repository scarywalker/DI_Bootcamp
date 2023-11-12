const { Router } = require("express");
const controller = require("../controller/controller");

const router = Router();

router.get("/", controller.getAllUsers);
router.get("/:id", controller.getUserById);
router.post("/register", controller.registerUser);
router.post("/login", controller.loginUser);
router.put("/:id", controller.updateUser);

module.exports = router;
