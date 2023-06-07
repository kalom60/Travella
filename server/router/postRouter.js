import express from "express";
import PostController from "../controllers/postController";

const router = express.Router();

router
  .route("/posts")
  .get(PostController.getAllPosts)
  .post(PostController.createPost);

router
  .route("/posts/:id")
  .get(PostController.getPost)
  .patch(PostController.updatePost)
  .delete(PostController.deletePost);

export default router;
