const { Router } = require("express");
const controller = require("../controller/controller");

const router = Router();

router.get("/", controller.getPosts);
router.get("/:id", controller.getPostId);
router.post("/", controller.addPost);
router.delete("/:id", controller.deletePost);
router.put("/:id", controller.updatePost);

module.exports = router;
