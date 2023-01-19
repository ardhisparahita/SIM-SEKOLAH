import BaseRoute from "./BaseRouter";
import AuthController from "../controllers/AuthController";
import { validateAuth } from "../middlewares/AuthValidator";

class AuthRoutes extends BaseRoute {
  public routes(): void {
    this.router.post("/register", validateAuth, AuthController.register)
    this.router.post("/login", AuthController.login)
  }
}

export default new AuthRoutes().router