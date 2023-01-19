import BaseRoute from "./BaseRouter";
import StudentActiveController from "../controllers/StudentActiveController";

class StudentActiveRoutes extends BaseRoute {
  routes(): void {
    this.router.get("/", StudentActiveController.index)
    this.router.post("/", StudentActiveController.create)
    this.router.get("/:id", StudentActiveController.show)
    this.router.put("/:id", StudentActiveController.update)
    this.router.delete("/:id", StudentActiveController.delete)
  }
}

export default new StudentActiveRoutes().router