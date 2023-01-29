const authController = require('../controllers/auth.controllers');

module.exports = function (app) {
    app.post("/api/v1/auth/signup", authController.signup);
    app.post("/api/v1/auth/signin", authController.signin);
}