import { DestroyUserController } from "@controllers/user/destroy.user.controller";
import { IndexUserController } from "@controllers/user/index.user.controller";
import { Route } from "@interfaces/route.interface";
import { Router } from "express";
import { ShowUserController } from "@controllers/user/show.user.controller";
import { StoreUserController } from "@controllers/user/store.user.controller";
import { UpdateUserController } from "@controllers/user/update.user.controller";

export class UserRoutes implements Route {
  public path = "/user";
  public router = Router();
  public storeUserController = new StoreUserController();
  public indexUserController = new IndexUserController();
  public showUserController = new ShowUserController();
  public updateUserController = new UpdateUserController();
  public destroyUsercontroller = new DestroyUserController();

  constructor() {
    this.router.post(`${this.path}`, this.storeUserController.handle);
    this.router.get(`${this.path}`, this.indexUserController.handle);
    this.router.get(`${this.path}/:id`, this.showUserController.handle);
    this.router.put(`${this.path}/:id`, this.updateUserController.handle);
    this.router.delete(`${this.path}/:id`, this.destroyUsercontroller.handle);
  }
}
