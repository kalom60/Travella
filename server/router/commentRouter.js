import express from "express";
import CommentController from "../controllers/commentController";

const router = express.Router();

router.route("/comments").post(CommentController.createComment);

export default router;
