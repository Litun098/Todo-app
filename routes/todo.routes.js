const todoController = require("../controllers/todo.controller");
const { verifyToken } = require("../middleware/authJWT");

module.exports = function (app) {
    app.post("/api/v1/todo", [verifyToken], todoController.createTodo)
    app.get("/api/v1/todo", [verifyToken], todoController.getAllTodos)
    app.get("/api/v1/todo/:id", [verifyToken], todoController.getTodo)
    app.put("/api/v1/todo/:id", [verifyToken], todoController.updateTodo)
}