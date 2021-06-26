import { NextFunction, Request, Response } from "express";

import { UpdateUserService } from "@services/user/update.user.service";

export class UpdateUserController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const updateUserService = new UpdateUserService();

      const { id } = req.user;

      const user = await updateUserService.execute(id, req.body);

      return res.json(user);
    } catch (error) {
      next(error);
    }
  }
}
