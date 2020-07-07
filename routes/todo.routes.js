const express = require("express");
const todoController = require("../controllers/todo.controller");
const { request } = require("express");
const router = express.Router();

router.post("/", todoController.createTodo);
router.get("/", todoController.getTodos);
router.get("/:todoId", todoController.getTodoById);
router.put("/:todoId", todoController.updateTodo);

module.exports = router;
