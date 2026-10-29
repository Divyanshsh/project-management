import { Router } from "express";
import {
  loginUser,
  logoutUser,
  regiserUser,
} from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import {
  userLoginValidator,
  userRegisterValidator,
} from "../validators/index.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(userRegisterValidator(), validate, regiserUser);
router.route("/login").post(userLoginValidator(), validate, loginUser);
router.route("/logout").post(verifyJWT, logoutUser);

export default router;
