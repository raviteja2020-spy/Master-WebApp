var express = require("express");
var router = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const filesupload = multer({ storage: storage });
//const filesupload = multer({ dest: "uploads/" });

const { signup, fillDetails, login } = require("../controllers/tutorLogin");
const { tutorTeachs } = require("../controllers/tutorTeaches");

//TUTOR SIGNUP ROUTE
const tutor_signup = filesupload.fields([
  { name: "name", maxCount: 1 },
  { name: "email", maxCount: 1 },
  { name: "password", maxCount: 1 },
]);

router.post("/sign-up", tutor_signup, signup);

//TUTOR FILL DETAILS ROUTE
const tutor_details = filesupload.fields([
  { name: "id", maxCount: 1 },
  { name: "name", maxCount: 1 },
  { name: "email", maxCount: 1 },
  { name: "gender", maxCount: 1 },
  { name: "profile_image", maxCount: 1 },
  { name: "qualification", maxCount: 1 },
  { name: "subjects", maxCount: 1 },
  { name: "classes", maxCount: 1 },
  { name: "locality", maxCount: 1 },
  { name: "city", maxCount: 1 },
  { name: "pincode", maxCount: 1 },
]);

router.post("/fill-details", tutor_details, fillDetails);

//Tutor Login Route
const tutor_login_fields = filesupload.fields([
  { name: "mobile", maxCount: 1 },
  { name: "password", maxCount: 1 },
]);

router.post("/login", tutor_login_fields, login);

//Tutor Teaches Post
const teach_fields = filesupload.fields([
  { name: "tutor_id", maxCount: 1 },
  { name: "subjects", maxCount: 1 },
  { name: "title", maxCount: 1 },
  { name: "venue", maxCount: 1 },
  { name: "classes", maxCount: 1 },
  { name: "languages", maxCount: 1 },
  { name: "price", maxCount: 1 },
]);

router.post("/teaches", teach_fields, tutorTeachs);

module.exports = router;
