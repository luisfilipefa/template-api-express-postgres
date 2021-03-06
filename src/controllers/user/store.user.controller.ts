import { NextFunction, Request, Response } from "express";

import { StoreUserService } from "@services/user/store.user.service";

export class StoreUserController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const createUserService = new StoreUserService();

      const { name, avatar, email, password } = req.body;

      const user = await createUserService.execute({
        name,
        avatar,
        email,
        password,
      });

      return res.json(user);
    } catch (error) {
      next(error);
    }
  }
}
