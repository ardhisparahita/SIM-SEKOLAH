import TeacherController from "../controllers/TeacherController";
import { auth } from "../middlewares/AuthMiddleware";
import { validateCreateTeacher } from "../middlewares/TeacherValidator";
import BaseRoute from "./BaseRouter";

class TeacherRoutes extends BaseRoute {
  public routes(): void {
    this.router.get("/", auth ,TeacherController.index)
    this.router.post("/", auth ,validateCreateTeacher ,TeacherController.create)
    this.router.get("/:id", auth ,TeacherController.show)
    this.router.put("/:id", auth ,TeacherController.update)
    this.router.delete("/:id", auth ,TeacherController.delete)
  }
}

export default new TeacherRoutes().router