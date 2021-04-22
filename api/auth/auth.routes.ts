import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import {
  postLogin,
  postSignup,
  getUser,
  getOTP,
  verifyOTP,
  patchProfile,
  patchPassword,
} from "./auth.controller";
import { onError, onNotFound } from "../error/error.controller";
import { validateQuery } from "../middlewares/verifyQuery.middleware";
import { validateUser } from "../middlewares/verifyJWT.middleware";
import { uploadProfilePicture } from "../middlewares/uploadProfilePicture.middleware";
import {
  changePasswordSchema,
  userInfoSchema,
  userLoginSchema,
  userOTPRequestSchema,
  userSignupSchema,
} from "./auth.schema";

const authHandler = nc<NextApiRequest, NextApiResponse>({
  onNoMatch: onNotFound,
  onError: onError,
});

authHandler
  .post("/login", validateQuery("body", userLoginSchema), postLogin)
  .post("/signup", validateQuery("body", userSignupSchema), postSignup)
  .get("/user", validateUser, getUser)
  .get("/getotp", validateUser, getOTP)
  .post(
    "/postotp",
    validateQuery("body", userOTPRequestSchema),
    validateUser,
    verifyOTP
  )
  .patch(
    "/editprofile",
    // validateQuery("body", userInfoSchema),
    validateUser,
    uploadProfilePicture.array("profilePicture", 1),
    patchProfile
  )
  .patch(
    "/changepassword",
    validateQuery("body", changePasswordSchema),
    validateUser,
    patchPassword
  );

export default authHandler;
