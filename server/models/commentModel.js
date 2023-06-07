import prisma from "../prisma/prisma";
require("express-async-errors");

class CommentModel {
  static async createComment(data) {
    const comment = await prisma.comment.create({
      data,
    });

    return comment;
  }
}

export default CommentModel;
