import express from "express";
import { getMyProfile, login, signup } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/me", isAuthenticated, getMyProfile);

router.post("/login", login);

router.post("/new", signup);

export default router;
