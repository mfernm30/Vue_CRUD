// Import express
import express from "express";

// Import functions from controller
import {
  showProducts,
  showProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.js";

// Init express router
const router = express.Router();

router.get("/products", showProducts);
router.get("/products/:id", showProductById);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;
