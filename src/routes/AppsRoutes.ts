import { Router } from "express";
import BaseRoute from "./BaseRouter";
import AppsController from "../controllers/AppsController";
import { validateCreateApps } from "../middlewares/AppsValidator";

class AppsRoutes extends BaseRoute {
  routes(): void {
    this.router.get("/", AppsController.index)
    this.router.post("/",validateCreateApps, AppsController.create)
    this.router.get("/:id", AppsController.show)
    this.router.put("/:id", AppsController.update)
    this.router.delete("/:id", AppsController.delete)
  }
}

export default new AppsRoutes().router