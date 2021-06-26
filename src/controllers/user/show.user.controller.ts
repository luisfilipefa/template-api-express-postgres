import { NextFunction, Request, Response } from "express";

import { ShowUserService } from "@services/user/show.user.service";

export class ShowUserController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const showUserService = new ShowUserService();

      // TODO receber id da req
      const { id } = req.params;

      const user = await showUserService.execute(id);

      return res.json(user);
    } catch (error) {
      next(error);
    }
  }
}
