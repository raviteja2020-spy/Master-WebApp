const bcrypt = require("bcrypt");

//hashed password
function encryptPassword(password, hash) {
  const hashedPassword = bcrypt.hash(password, hash);
  return hashedPassword;
}
//compare Password
function decryptPassword(password, dbPassword) {
  const comparePassword = bcrypt.compare(password, dbPassword);
  return comparePassword;
}
// Cout String Lenght
const string_length = function (string) {
  if (
    string != null ||
    string != "null" ||
    string != "" ||
    string != undefined ||
    string != "undefined"
  ) {
    return string.length;
  }
};

module.exports = {
  string_length,
  encryptPassword,
  decryptPassword,
};
