var validation = require("validation-master");
var utility = require("../utility/utility");
var table = require("../model/baseTable");
const jwt = require("jsonwebtoken");
require("dotenv").config();
//const { v4: uuidv4 } = require("uuid");

//const { uploadS3 } = require("../s3");

const signup = async (req, res, next) => {
  let { mobile, password, cpassword } = req.body;
  if (mobile == "" || mobile == null || mobile == undefined) {
    return res.send({
      status: 200,
      success: false,
      response: false,
      message: "Enter Mobile Number",
    });
  }
  if (!validation.isNumeric(mobile)) {
    return res.send({
      status: 200,
      success: false,
      response: false,
      message: "Invalid Mobile Number",
    });
  }
  if (utility.string_length(mobile) != 10) {
    return res.send({
      status: 200,
      success: false,
      response: false,
      message: "Mobile length should be 10 digits",
    });
  }

  if (password == "" || password == null || password == undefined) {
    return res.send({
      status: 200,
      success: false,
      response: false,
      message: "Enter your password",
    });
  }

  if (utility.string_length(password) < 6) {
    return res.send({
      status: 200,
      success: false,
      response: false,
      message: "Password length should be 6 digits",
    });
  }

  if (cpassword == "" || cpassword == null || cpassword == undefined) {
    return res.send({
      status: 200,
      success: false,
      response: false,
      message: "Enter your Confirm Password",
    });
  }

  if (password !== cpassword) {
    return res.send({
      status: 200,
      success: false,
      response: false,
      message: "Password not matched",
    });
  }

  const [errRes, mobileCheck] = await table.commonTable.getRowData("tutor", {
    mobile: mobile,
  });

  if (errRes) {
    return res.send({
      status: 200,
      success: false,
      response: false,
      message: "Something went wrong please try again.",
    });
  }
  if (mobileCheck != undefined) {
    return res.send({
      status: 200,
      success: false,
      response: false,
      message: "Mobile already registered.",
    });
  }
  if (mobileCheck == undefined) {
    const hashPassword = await utility.encryptPassword(password, 10);
    //const payload = { mobile: mobile };
    //const jwtToken = jwt.sign(payload, process.env.MY_SECRET_TOKEN);
    const registerTutor = [],
      status = 2;

    registerTutor.push(mobile);
    registerTutor.push(hashPassword);
    registerTutor.push(status);
    registerTutor.push(new Date());
    registerTutor.push(new Date());

    const tutorQuery =
      "INSERT INTO tutor (mobile,password,status,created_at,updated_at) VALUES(?,?,?,?,?)";

    const [errInsert, tutorInsert] = await table.commonTable.insertData(
      tutorQuery,
      registerTutor
    );

    if (errInsert) {
      return res.send({
        status: 200,
        success: false,
        response: false,
        message: "Something went wrong please try again.",
      });
    }
    if (tutorInsert != undefined) {
      return res.send({
        status: 200,
        success: true,
        response: true,
        message: "Register Successfull",
        tutorId: tutorInsert.insertId,
      });
    }
  }
};

const fillDetails = async (req, res, next) => {
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

  const {
    id,
    name,
    email,
    gender,
    profile_image,
    qualification,
    locality,
    city,
    pincode,
  } = req.body;
  if (id == "" || id == null || id == undefined) {
    return res.send({
      status: 200,
      success: false,
      response: false,
      message: "Enter your id ",
    });
  }
  if (!validation.isNumeric(id)) {
    return res.send({
      status: 200,
      success: false,
      response: false,
      message: "Invalid id",
    });
  }
  if (name == "" || name == null || name == undefined) {
    return res.send({
      status: 200,
      success: false,
      response: false,
      message: "Enter your Name ",
    });
  }
  if (email == "" || email == null || email == undefined) {
    return res.send({
      status: 200,
      success: false,
      response: false,
      message: "Enter your email ",
    });
  }
  if (!validation.emailValidator(email)) {
    return res.send({
      status: 200,
      success: false,
      response: false,
      message: "Invalid Email ",
    });
  }
  if (gender == "" || gender == null || gender == undefined) {
    return res.send({
      status: 200,
      success: false,
      response: false,
      message: "Enter your gender ",
    });
  }
  if (utility.string_length(gender) != 1) {
    return res.send({
      status: 200,
      success: false,
      response: false,
      message: "Enter gender M or F or O",
    });
  }
  if (
    qualification == "" ||
    qualification == null ||
    qualification == undefined
  ) {
    return res.send({
      status: 200,
      success: false,
      response: false,
      message: "Enter your qualification ",
    });
  }
  if (locality == "" || locality == null || locality == undefined) {
    return res.send({
      status: 200,
      success: false,
      response: false,
      message: "Enter your locality ",
    });
  }

  if (city == "" || city == null || city == undefined) {
    return res.send({
      status: 200,
      success: false,
      response: false,
      message: "Enter your city ",
    });
  }
  if (pincode == "" || pincode == null || pincode == undefined) {
    return res.send({
      status: 200,
      success: false,
      response: false,
      message: "Enter your pincode ",
    });
  }
  // const file = req.files.profile_image[0];
  // const myFile = req.files.profile_image[0].originalname.split(".");
  // const fileType = myFile[myFile.length - 1];
  // const result = await uploadS3(file, fileType);
  // console.log(result);

  //Check Email
  const [errEmailRes, checkEmail] = await table.commonTable.getRowData(
    "tutor",
    { email: email }
  );

  if (errEmailRes) {
    return res.send({
      status: 200,
      success: false,
      response: false,
      message: "Something went wrong please try again.",
    });
  }
  if (checkEmail != undefined) {
    return res.send({
      status: 200,
      success: false,
      response: false,
      message: "Email Already Used",
    });
  }

  if (checkEmail == undefined) {
    const tutorDetails = {},
      status = 1;
    tutorDetails.name = name;
    tutorDetails.email = email;
    tutorDetails.gender = gender;
    tutorDetails.profile_image = "Image";
    tutorDetails.qualification = qualification;
    tutorDetails.locality = locality;
    tutorDetails.city = city;
    tutorDetails.pincode = pincode;
    tutorDetails.status = status;
    tutorDetails.updated_at = new Date();

    const [errRes, tutorRegister] = await table.commonTable.updateData(
      "tutor",
      tutorDetails,
      { id: id }
    );
    if (errRes) {
      return res.send({
        status: 200,
        success: false,
        response: false,
        message: "Something went wrong please try again.....",
      });
    }
    if (tutorRegister != undefined) {
      return res.send({
        status: 200,
        success: true,
        response: true,
        message: "Account Activated.",
      });
    }
  }
};

const login = async (req, res, next) => {
  let { mobile, password } = req.body;
  if (mobile == "" || mobile == null || mobile == undefined) {
    return res.send({
      status: 200,
      success: false,
      response: false,
      message: "Enter Mobile Number",
    });
  }
  if (!validation.isNumeric(mobile)) {
    return res.send({
      status: 200,
      success: false,
      response: false,
      message: "Invalid Mobile Number",
    });
  }
  if (utility.string_length(mobile) != 10) {
    return res.send({
      status: 200,
      success: false,
      response: false,
      message: "Mobile length should be 10 digits",
    });
  }

  if (password == "" || password == null || password == undefined) {
    return res.send({
      status: 200,
      success: false,
      response: false,
      message: "Enter your password",
    });
  }
  if (utility.string_length(password) < 6) {
    return res.send({
      status: 200,
      success: false,
      response: false,
      message: "Password length should be 6 digits",
    });
  }

  //Check Mobile in Database

  const [errMobile, mobileResponse] = await table.commonTable.getRowData(
    "tutor",
    { mobile: mobile }
  );
  if (errMobile) {
    return res.send({
      status: 200,
      success: false,
      response: false,
      message: "Something went wrong please try again",
    });
  }
  if (mobileResponse === undefined) {
    return res.send({
      status: 200,
      success: false,
      response: false,
      message: "Mobile number not exist please register",
    });
  }
  if (mobileResponse != undefined) {
    const isPasswordCorrect = await utility.decryptPassword(
      password,
      mobileResponse.password
    );
    if (isPasswordCorrect) {
      const payload = {
        unknown: mobileResponse.id,
        mobile: mobileResponse.mobile,
      };
      const jwt_token = jwt.sign(payload, process.env.MY_SECRET_TOKEN);
      return res.send({
        status: 200,
        success: true,
        response: true,
        message: "Login Success",
        tutor_id: mobileResponse.id,
        token: jwt_token,
      });
    } else {
      return res.send({
        status: 200,
        success: false,
        response: false,
        message: "Invalid Password or Mobile",
      });
    }
  }
};

module.exports = {
  signup,
  fillDetails,
  login,
};
