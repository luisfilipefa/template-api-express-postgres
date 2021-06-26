import { CreateUserController } from "@controllers/user/create.user.controller";
import { Route } from "@interfaces/route.interface";
import { Router } from "express";

export class UserRoutes implements Route {
  public path = "/user";
  public router = Router();
  public createUserController = new CreateUserController();

  constructor() {
    this.router.post(`${this.path}`, this.createUserController.handle);
  }
}
