import { Router } from "express";
import {
  deleteProduct,
  getAllProducts,
  getOneProduct,
  insertProduct,
  updateProduct,
} from "../controllers/products.controller.js";

const router = Router();

router.get("/getAll", getAllProducts);
router.get("/getOne/:bc", getOneProduct);
router.post("/insert", insertProduct);
router.put("/update/:bc", updateProduct);
router.delete("/delete/:bc", deleteProduct);

export default router;
