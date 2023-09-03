// ** Exporess
import express from "express";
const router = express.Router();

// ** Multer
const { upload } = require("../multer");

// ** Controllers
const { singleUploadFile, multipleUploadFile } = require("./controllers");

// ** Routes
router.post("/single-file", upload.single("image"), singleUploadFile);
router.post("/multiple-files", upload.array("images", 5), multipleUploadFile);

module.exports = router;
