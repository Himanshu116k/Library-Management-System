import express from "express";
const router = express.Router();
import BookController from "../controllers/bookController.js";

router.post("/add", BookController.addBook);
router.put("/update/:id", BookController.updateQuantity);
router.delete("/delete/:id", BookController.deleteBook);
router.get("/all", BookController.getBooks);

export default router