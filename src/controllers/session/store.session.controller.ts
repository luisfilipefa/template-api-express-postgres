import { NextFunction, Request, Response } from "express";

import { StoreSessionService } from "@services/session/store.session.service";

export class StoreSessionController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const storeSessionService = new StoreSessionService();

      const { email, password } = req.body;

      const { token, user } = await storeSessionService.execute({
        email,
        password,
      });

      return res.json({ token, user });
    } catch (error) {
      next(error);
    }
  }
}
