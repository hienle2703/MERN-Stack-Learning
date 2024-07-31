import express from "express";
import { isAdmin, isAuthenticated } from "../middlewares/auth.js";
import {
  createNewOrder,
  getMyOrders,
  getOrderDetail,
} from "../controllers/order.js";

const router = express.Router();

router.post("/new", isAuthenticated, createNewOrder);
router.get("/all", isAuthenticated, getMyOrders);

router.route("/single/:id").get(isAuthenticated, getOrderDetail);
//   .put(isAuthenticated, isAdmin, processOrder);

export default router;
