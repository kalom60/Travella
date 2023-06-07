import prisma from "../prisma/prisma";
require("express-async-errors");

class UserModel {
  static async createUser(data) {
    const user = await prisma.user.create({
      data,
    });

    return user;
  }

  static async getUser(id) {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      const error = new Error("User not found");
      error.statusCode(404);
      throw error;
    }

    return user;
  }

  static async updateUser(id, data) {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      const error = new Error("User not found");
      error.statusCode(404);
      throw error;
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data,
    });

    return updatedUser;
  }
}

export default UserModel;
