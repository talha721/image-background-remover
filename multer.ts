const multer = require("multer");
const path = require("path");

const storageEngine = multer.diskStorage({
  destination: "./images",
  filename: (
    req: any,
    file: { originalname: any },
    cb: (arg0: null, arg1: string) => void
  ) => {
    cb(null, `${Date.now()}--${file.originalname}`);
  },
});

const checkFileType = function (
  file: { originalname: any; mimetype: string },
  cb: (arg0: string | null, arg1: boolean | undefined) => void
) {
  //Allowed file extensions
  const fileTypes = /jpeg|jpg|png|gif|svg/;

  //check extension names
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());

  const mimeType = fileTypes.test(file.mimetype);

  if (mimeType && extName) {
    return cb(null, true);
  } else {
    cb("Error: You can Only Upload Images!!", undefined);
  }
};

const upload = multer({
  storage: storageEngine,
  limits: { fileSize: 1000000 },
  fileFilter: (req: any, file: any, cb: any) => {
    checkFileType(file, cb);
  },
});

module.exports = {
  upload,
};
