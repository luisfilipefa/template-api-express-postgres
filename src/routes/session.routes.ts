import { AuthenticationMiddleware } from "src/middlewares/authentication.middleware";
import { Route } from "@interfaces/route.interface";
import { Router } from "express";
import { ShowSessionController } from "@controllers/session/show.session.controller";
import { StoreSessionController } from "@controllers/session/store.session.controller";

export class SessionRoutes implements Route {
  public path = "/session";
  public router = Router();
  public authenticationMiddleware = new AuthenticationMiddleware();
  public storeSessionController = new StoreSessionController();
  public showSessionController = new ShowSessionController();

  constructor() {
    this.router.post(`${this.path}`, this.storeSessionController.handle);
    this.router.get(
      `${this.path}/:id`,
      this.authenticationMiddleware.check,
      this.showSessionController.handle
    );
  }
}
