import BaseRoute from "./BaseRouter";
import StudentController from "../controllers/StudentController";
import { validateCreateStudent } from "../middlewares/StudentValidator";
import { auth } from "../middlewares/AuthMiddleware";

class StudentRoutes extends BaseRoute {
  public routes(): void {
    this.router.get("/", auth ,StudentController.index)
    this.router.post("/", auth ,validateCreateStudent ,StudentController.create)
    this.router.get("/:id", auth ,StudentController.show)
    this.router.put("/:id", auth ,StudentController.update)
    this.router.delete("/:id", auth ,StudentController.delete)
  }
}

export default new StudentRoutes().router