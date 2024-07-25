import express from "express";

import uploadMiddleware from "./middleware/upload.middleware";
import uploadController from "./controller/upload.controller";
import productsController from "./controller/products.controller";
import categoryController from "./controller/category.controller";

const router = express.Router();

router.get("/products", productsController.findAll);
router.post("/products", uploadMiddleware.single, productsController.create);
router.get("/products/:id", productsController.findOne);
router.put("/products/:id", productsController.update);
router.delete("/products/:id", productsController.delete);

router.get("/categories", categoryController.getAllCategories);
router.get("/category/:id", categoryController.getCategoryById);
router.post("/category", categoryController.createCategory);
router.put("/category/:id", categoryController.updateCategory);
router.delete("/category/:id", categoryController.deleteCategory);

router.post("/upload", uploadMiddleware.single, uploadController.single);
router.post("/uploads", uploadMiddleware.multiple, uploadController.multiple);

export default router;