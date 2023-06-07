import express from "express";
import UserController from "../controllers/userController";

const router = express.Router();

router
  .route("/users")
  .get(UserController.getUser)
  .post(UserController.createUser);
router.route("/users/:id").patch(UserController.updateUser);

export default router;
