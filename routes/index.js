//import express
const express = require("express");

//init express router
const router = express.Router();

//import register controller
const registerController = require("../controllers/RegisterController");

//import login controller
const loginController = require("../controllers/LoginController");

//import validate register and login
const { validateRegister, validateLogin } = require("../utils/validators/auth");

//define route for register
router.post("/register", validateRegister, registerController.register);

//define route for login
router.post("/login", validateLogin, loginController.login);

//export router
module.exports = router;
