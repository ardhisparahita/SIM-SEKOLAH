import BaseRoute from "./BaseRouter";
import UsersOnAppsController from "../controllers/UsersOnAppsController";

class UsersOnAppsRoutes extends BaseRoute {
  routes(): void {
    this.router.get("/", UsersOnAppsController.index)
    this.router.post("/", UsersOnAppsController.create)
    this.router.get("/:id", UsersOnAppsController.show)
    this.router.put("/:id", UsersOnAppsController.update)
    this.router.delete("/:id", UsersOnAppsController.delete)
  }
}

export default new UsersOnAppsRoutes().router