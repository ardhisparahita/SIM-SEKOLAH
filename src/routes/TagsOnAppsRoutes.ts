import BaseRoute from "./BaseRouter";
import TagsOnAppsController from "../controllers/TagsOnAppsController";

class TagsOnAppsRoutes extends BaseRoute {
  routes(): void {
    this.router.get("/", TagsOnAppsController.index)
    this.router.post("/", TagsOnAppsController.create)
    this.router.get("/:id", TagsOnAppsController.show)
    this.router.put("/:id", TagsOnAppsController.update)
    this.router.delete("/:id", TagsOnAppsController.delete)
  }
}

export default new TagsOnAppsRoutes().router