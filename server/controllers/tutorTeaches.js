var validation = require("validation-master");
var utility = require("../utility/utility");
var table = require("../model/baseTable");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const tutorTeachs = async (req, res, next) => {
  const checkHeader = req.get("Authorization");

  if (checkHeader == "undefined" || checkHeader == undefined) {
    return res.send({
      status: 400,
      success: false,
      responce: false,
      message: "Bad Request",
    });
  }

  if (
    checkHeader == "" ||
    checkHeader == null ||
    checkHeader == undefined ||
    checkHeader == "undefined"
  ) {
    return res.send({
      status: 400,
      success: false,
      responce: false,
      message: "Invalid Authorization",
    });
  }

  if (!(checkHeader == process.env.STATIC_JWT_TOKEN)) {
    return res.send({
      status: 400,
      success: false,
      responce: false,
      message: "Invalid token",
    });
  }

  const { tutor_id, subjects, title, venue, classes, languages, price } =
    req.body;

  if (tutor_id == "" || tutor_id == null || tutor_id == undefined) {
    return res.send({
      status: 200,
      success: false,
      response: false,
      message: "Enter Mobile Number",
    });
  }
};

module.exports = { tutorTeachs };
