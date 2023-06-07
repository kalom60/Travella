import prisma from "../prisma/prisma";
require("express-async-errors");

class PostModel {
  static async createPost(data) {
    const post = await prisma.post.create({
      data,
    });
    return post;
  }

  static async getAllPosts() {
    const posts = await prisma.post.findMany();
    return posts;
  }

  static async getPost(id) {
    const post = await prisma.post.findUnique({
      where: { id },
    });
    if (!post) {
      const error = new Error("Post not found");
      error.statusCode = 404;
      throw error;
    }

    return post;
  }

  static async updatePost(id, data) {
    const post = await prisma.post.findUnique({
      where: { id },
    });
    if (!post) {
      const error = new Error("Post not found");
      error.statusCode = 404;
      throw error;
    }

    const updatedPost = await prisma.post.update({
      where: { id },
      data,
    });

    return updatedPost;
  }

  static async deletePost(id) {
    const post = await prisma.post.findUnique({
      where: { id },
    });
    if (!post) {
      const error = new Error("Post not found");
      error.statusCode = 404;
      throw error;
    }

    await prisma.post.delete({
      where: { id },
    });

    return true;
  }
}

export default PostModel;
