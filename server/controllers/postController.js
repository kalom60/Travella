import PostModel from "../models/postModel";

class PostController {
  static async createPost(req, res) {
    const post = await PostModel.createPost(req.body);
    res.status(201).json(post);
  }

  static async getAllPosts(req, res) {
    const posts = await PostModel.getAllPosts();
    res.status(200).json(posts);
  }

  static async getPost(req, res) {
    const post = await PostModel.getPost(req.params.id);
    res.status(200).json(post);
  }

  static async updatePost(req, res) {
    const post = await PostModel.updatePost(req.params.id, req.body);
    res.status(200).json(post);
  }

  static async deletePost(req, res) {
    await PostModel.deletePost(req.params.id);
    res.status(204);
  }
}

export default PostController;
