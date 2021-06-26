import { NextFunction, Request, Response } from "express";

import { HttpError } from "@errors/HttpError";
import { verifyToken } from "@utils/verifyToken";

export class AuthenticationMiddleware {
  async check(req: Request, res: Response, next: NextFunction) {
    try {
      const { authorization } = req.headers;

      if (!authorization)
        throw new HttpError(401, "Invalid authorization header");

      const [_, token] = authorization.split(" ");

      if (!token) throw new HttpError(401, "Invalid token");

      const decoded = verifyToken(token);

      req.user = decoded;

      next();
    } catch (error) {
      next(error);
    }
  }
}
