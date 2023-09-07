import express from "express";
import {
  loginUser,
  logoutUser,
  refreshToken,
} from "../controllers/authController.js";

const router = express.Router();

router.route("/login").post(loginUser);

router.route("/refresh").get(refreshToken);

router.route("/logout").post(logoutUser);

export default router;
