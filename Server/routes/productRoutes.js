import express from "express";
const router = express.Router();
import { verifyToken } from "../middleware/verifyToken.js";
import {
  getProducts,
  postProduct,
  updateProduct,
  getProduct,
  deleteProduct,
} from "../controllers/product.js";

// protect all Prodcut route from acccessing without valid token
router.use(verifyToken);

router.get("/products", getProducts);
router.post("/productscreate", postProduct);
router.put("/products/:id", updateProduct);
router.get("/products/:id", getProduct);
router.delete("/products", deleteProduct);

export default router;
