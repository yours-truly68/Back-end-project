import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetails,
  updateUserAvatar,
  updateUserCoverImage,
  getUserChannelProfile,
  getWatchHistory,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { veryJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route("/login").post(loginUser);

//secured route - user must be logged in
router.route("/logout").post(veryJWT, logoutUser);

router.route("/refresh-token").post(refreshAccessToken);

router.route("/change-password").post(veryJWT, changeCurrentPassword);

router.route("/current-user").get(veryJWT, getCurrentUser);

router.route("/update-account").patch(updateAccountDetails);

router
  .route("/avatar")
  .patch(veryJWT, upload.single("avatar"), updateUserAvatar);

router
  .route("/cover-image")
  .patch(veryJWT, upload.single("coverImage"), updateUserCoverImage);

router.route("/c/:username").get(veryJWT, getUserChannelProfile);

router.route("/history").get(veryJWT, getWatchHistory);

export default router;
