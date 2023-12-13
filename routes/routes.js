const express = require("express");

//controllers
const loginController = require("../controllers/loginController");
const eventController = require("../controllers/eventController");
const productController = require("../controllers/productController");

//middlewares
const { verifyToken } = require("../middlewares/token");

const router = express.Router();

router.post("/login/create", loginController.createLoginController);

router.post("/login", loginController.postLoginController);

router.post(
  "/event/create",
  verifyToken,
  eventController.createEventController
);

router.get("/events", eventController.getEventController);

router.delete("/event/:id", verifyToken, eventController.deleteEventController);

router.post(
  "/product/create",
  verifyToken,
  productController.createProductController
);

router.get("/products", productController.getProductController);

router.get(
  "/products/:category",
  productController.getProductsByCategoryController
);

router.delete(
  "/product/:id",
  verifyToken,
  productController.deleteProductController
);

module.exports = router;
