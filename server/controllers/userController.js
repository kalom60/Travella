import UserModel from "../models/userModel";

class UserController {
  static async createUser(req, res) {
    const user = await UserModel.createUser(req.body);
    res.status(201).json(user);
  }

  static async getUser(req, res) {
    const user = await UserModel.getUser(req.params.id);
    res.status(200).json(user);
  }

  static async updateUser(req, res) {
    const user = await UserModel.updateUser(req.params.id, req.body);
    res.status(200).json(user);
  }
}

export default UserController;
