import express from "express";
import UserController from "../controllers/userController";

const router = express.Router();

router.route("/users").post(UserController.createUser);
router
  .route("/users/:id")
  .get(UserController.getUser)
  .patch(UserController.updateUser);

export default router;
