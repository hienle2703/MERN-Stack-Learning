import express from "express";
import {
  getMyProfile,
  login,
  signup,
  logOut,
  updateProfile,
  changePassword,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/me", isAuthenticated, getMyProfile);

router.post("/login", login);

router.post("/new", signup);

router.get("/logout", isAuthenticated, logOut);

// Update Routes
router.put("/updateprofile", isAuthenticated, updateProfile);
router.put("/changepassword", isAuthenticated, changePassword);

export default router;
