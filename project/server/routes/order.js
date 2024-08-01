import express from "express";
import { isAdmin, isAuthenticated } from "../middlewares/auth.js";
import {
  createNewOrder,
  getAdminOrders,
  getMyOrders,
  getOrderDetail,
  processOrder,
} from "../controllers/order.js";

const router = express.Router();

router.post("/new", isAuthenticated, createNewOrder);
router.get("/my", isAuthenticated, getMyOrders);
router.get("/admin", isAuthenticated, isAdmin, getAdminOrders);

router
  .route("/single/:id")
  .get(isAuthenticated, getOrderDetail)
  .put(isAuthenticated, isAdmin, processOrder);

export default router;
