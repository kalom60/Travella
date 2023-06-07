import CommentModel from "../models/commentModel";

class CommentController {
  static async createComment(req, res) {
    const comment = await CommentModel.createComment(req.body);
    res.status(201).json(comment);
  }
}

export default CommentController;
