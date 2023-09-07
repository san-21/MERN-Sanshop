import express from "express";
const router = express.Router();
import { verifyToken } from "../middleware/verifyToken.js";
import {
  getUsers,
  postUser,
  updateUser,
  deleteUser,
  getUser,
  signUpUser,
} from "../controllers/user.js";

// protect all user route from acccessing without valid token
router.use(verifyToken);

router.get("/users", getUsers);
router.post("/addnewuser", postUser);
router.get("/getuser/:id", getUser);
router.put("/updateuser/:id", updateUser);
router.delete("/deleteuser", deleteUser);
router.patch("/signupuser/:id", signUpUser);
// router.get("/user/:id", getUser);

export default router;
