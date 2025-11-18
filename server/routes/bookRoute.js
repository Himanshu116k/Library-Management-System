import express from "express";
const router = express.Router();
import BookController from "../controllers/bookController.js";
import { upload } from "../middleware/multer.Middleware.js";

router.post(
  "/add",
  upload.fields([{ name: "BookCoverImage", maxCount: 1 }]),
  BookController.addBook
);router.post("/update", BookController.updateQuantity);
router.delete("/delete/:id", BookController.deleteBook);
router.get("/all", BookController.getBooks);
router.post("/buy", BookController.buyBook);
router.post("/returnbooks", BookController.returnBooks);

export default router