const express = require("express");
const { registerController } = require("../controllers/authController");
const { loginController } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const { currentUserController } = require("../controllers/authController");

const router = express.Router();

//routes
//Register || Post
router.post("/register", registerController);

//Login || post
router.post("/login", loginController);

//Get Current User  || GET
router.get("/current-user", authMiddleware, currentUserController);

module.exports = router;
