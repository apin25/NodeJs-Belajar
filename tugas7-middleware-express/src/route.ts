import express from "express";
import { single, multiple } from "./middlewares/upload.middleware";
import { handleUpload } from "./utils/cloudinary";

const router = express.Router();

function isError(obj: unknown): obj is Error {
  return obj instanceof Error;
}

router.post("/upload/single", single, async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }
    const result = await handleUpload(req.file.buffer);
    res.status(200).json(result);
  } catch (error) {
    if (isError(error)) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred." });
    }
  }
});

router.post("/upload/multiple", multiple, async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).send("No files uploaded.");
    }
    const uploadPromises = (req.files as Express.Multer.File[]).map((file) =>
      handleUpload(file.buffer)
    );
    const results = await Promise.all(uploadPromises);
    res.status(200).json(results);
  } catch (error) {
    if (isError(error)) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred." });
    }
  }
});

export default router;