//import express
const express = require("express");

//init express router
const router = express.Router();

//import register controller
const registerController = require("../controllers/RegisterController");

//import validate register
const { validateRegister } = require("../utils/validators/auth");

//define route for register
router.post("/register", validateRegister, registerController.register);

//export router
module.exports = router;
