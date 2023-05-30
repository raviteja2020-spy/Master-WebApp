const fs = require("fs");
const S3 = require("aws-sdk/clients/s3");
const { v4: uuidv4 } = require("uuid");
const { resolve } = require("path");
require("dotenv").config();

const bucket_name = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

//S3 bucket upload
function uploadS3(file, fileType) {
  //const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: bucket_name,
    Body: file.buffer,
    Key: `${uuidv4()}.${fileType}`,
  };
  return s3.upload(uploadParams).promise();
}

module.exports = { uploadS3 };
