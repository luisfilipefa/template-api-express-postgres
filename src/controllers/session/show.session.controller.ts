import { NextFunction, Request, Response } from "express";

import { ShowSessionService } from "@services/session/show.session.service";

export class ShowSessionController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const showSessionService = new ShowSessionService();

      const { id } = req.user;

      const user = await showSessionService.execute(id);

      return res.json(user);
    } catch (error) {
      next(error);
    }
  }
}
