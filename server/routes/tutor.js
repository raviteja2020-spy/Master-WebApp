var express = require("express");
var router = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const filesupload = multer({ storage: storage });
//const filesupload = multer({ dest: "uploads/" });

const { signup, fillDetails } = require("../controllers/tutorLogin");

//TUTOR SIGNUP ROUTE
const tutor_signup = filesupload.fields([
  { name: "mobile", maxCount: 1 },
  { name: "password", maxCount: 1 },
  { name: "cpassword", maxCount: 1 },
]);

router.post("/sign-up", tutor_signup, signup);

//TUTOR FILL DETAILS ROUTE
const tutor_details = filesupload.fields([
  { name: "id", maxCount: 1 },
  { name: "name", maxCount: 1 },
  { name: "email", maxCount: 1 },
  { name: "gender", maxCount: 1 },
  { name: "profile_image", maxCount: 1 },
  { name: "locality", maxCount: 1 },
  { name: "city", maxCount: 1 },
  { name: "pincode", maxCount: 1 },
]);

router.post("/fill-details", tutor_details, fillDetails);

module.exports = router;
