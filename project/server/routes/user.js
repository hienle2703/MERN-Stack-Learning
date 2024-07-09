import express from "express";
import { getMyProfile, login, signup } from "../controllers/user.js";

const router = express.Router();

router.route("/me").get(getMyProfile);

router.post("/login", login);

router.post("/new", signup);

export default router;
