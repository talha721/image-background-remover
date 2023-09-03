// ** Express
import { Request, Response } from "express";

// ** Multer
import { Multer } from "multer";

// ** Remove background package
import { Rembg } from "rembg-node";
import sharp from "sharp";

// ** Types
type TRequest = {
  file: { originalname: string; path: string };
};

type TMultiFilesRequest = Request & { files: Express.Multer.File[] };

type TResponse = {
  send: (arg0: string) => void;
  status: (arg0: number) => {
    (): any;
    new (): any;
    send: { (arg0: string): void; new (): any };
  };
};

// ** Functions
const singleUploadFile = async (req: TRequest, res: TResponse) => {
  try {
    if (req.file) {
      const fileName = req.file.originalname;
      const path = req.file.path;

      const input = sharp(path);
      // optional arguments
      const rembg = new Rembg({
        logging: true,
      });

      const output = await rembg.remove(input);

      await output.webp().toFile(`images/remove-bg/${fileName}`);

      res.send("Single file uploaded successfully");
    } else {
      res.status(400).send("Please upload a valid image");
    }
  } catch (error) {
    console.error("Error processing single upload:", error);
    res.status(500).send("Internal server error");
  }
};

const multipleUploadFile = async (req: TMultiFilesRequest, res: TResponse) => {
  try {
    const files = req.files;

    if (files && files.length > 0) {
      for (let index = 0; index < files.length; index++) {
        const input = sharp(files[index].path as string);

        // optional arguments
        const rembg = new Rembg({
          logging: true,
        });

        const output = await rembg.remove(input);

        await output
          .webp()
          .toFile(`images/remove-bg/${files[index].originalname}`);
      }

      res.send("Multiple files uploaded successfully");
    } else {
      res.status(400).send("Please upload valid images");
    }
  } catch (error) {
    console.error("Error processing multiple upload:", error);
    res.status(500).send("Internal server error");
  }
};

export { singleUploadFile, multipleUploadFile };
