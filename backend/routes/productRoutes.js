import express from "express";
import {
  createProductReview,
  getProductById,
  getProducts,
  getTopProducts,
} from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").get(getProducts);
router.route("/:id/reviews").post(protect, createProductReview);
router.get('/top', getTopProducts)
router.route("/:id").get(getProductById);

export default router;
