import { NextFunction, Request, Response } from "express";

import { IndexUserService } from "@services/user/index.user.service";

export class IndexUserController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const indexUserService = new IndexUserService();

      const users = await indexUserService.execute();

      return res.json(users);
    } catch (error) {
      next(error);
    }
  }
}
