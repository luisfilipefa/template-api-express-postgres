import { NextFunction, Request, Response } from "express";

import { DestroyUserService } from "@services/user/destroy.user.service";

export class DestroyUserController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const destroyUserService = new DestroyUserService();

      const { id } = req.user;

      const response = await destroyUserService.execute(id);

      return res.json(response);
    } catch (error) {
      next(error);
    }
  }
}
