import prisma from "../prisma/prisma";
import hashPassword from "../utils/hashPassword";
require("express-async-errors");

class UserModel {
  static async createUser(data) {
    const checkIfUserExists = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (checkIfUserExists) {
      const error = new Error("User with this email alreay exists.");
      error.statusCode = 404;
      throw error;
    }

    const hashedPassword = await hashPassword(data.password);
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
      error.statusCode = 404;
      throw error;
    }

    return user;
  }

  static async updateUser(id, data) {
    if (data.password) {
      const hashedPassword = await hashPassword(data.password);
      data.password = hashedPassword;
    }

    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
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
