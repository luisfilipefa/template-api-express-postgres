import { NextFunction, Request, Response } from "express";

import { UpdateUserService } from "@services/user/update.user.service";

export class UpdateUserController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const updateUserService = new UpdateUserService();

      // TODO receber id da req
      const { id } = req.params;

      const user = await updateUserService.execute(id, req.body);

      return res.json(user);
    } catch (error) {
      next(error);
    }
  }
}
