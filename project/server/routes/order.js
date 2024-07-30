import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { createNewOrder } from "../controllers/order.js";

const router = express.Router();

router.post("/new", isAuthenticated, createNewOrder);

export default router;
