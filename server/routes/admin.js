var express = require("express");
var router = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const filesupload = multer({ storage: storage });

const { login } = require("../controllers/adminLogin");

const admin_login = filesupload.fields([
  { name: "mobile", maxCount: 1 },
  { name: "password", maxCount: 1 },
]);

router.post("/login", admin_login, login);

module.exports = router;
