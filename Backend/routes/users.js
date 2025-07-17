const express = require("express");
const router = express.Router();
const userController = require("../controllers/User.controller");
const multer = require("multer");
const path = require("path");
const authenticateJWT=require("../Authentication/authentication")
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Save files in "uploads" folder
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });
router.post("/register",upload.single('photo'),userController.registerUser);
router.post("/loginUser", userController.loginUser);
router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.post("/Text", userController.createTextContent);
router.put("/updateTextContent", userController.updateTextContent);
router.post("/saveOrUpdateText", userController.saveOrUpdateText);

module.exports = router;
