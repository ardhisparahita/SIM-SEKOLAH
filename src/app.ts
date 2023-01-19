import express, {Application, Request, Response} from "express"
import morgan from "morgan"
import helmet from "helmet"
import cors from "cors"
import compression from "compression"

// Routes
import UserRoutes from "./routes/UserRoutes"
import TeacherRoutes from "./routes/TeacherRoutes"
import StudentRoutes from "./routes/StudentRoutes"
import AuthRoutes from "./routes/AuthRoutes"
import AppsRoutes from "./routes/AppsRoutes"
import StudentActiveRoutes from "./routes/StudentActiveRoutes"
import UsersOnAppsRoutes from "./routes/UsersOnAppsRoutes"
import TagsOnAppsRoutes from "./routes/TagsOnAppsRoutes"

class App {
  public app: Application

  constructor() {
    this.app = express()
    this.plugins()
    this.routes()
  }

  protected plugins(): void {
    this.app.use(express.json())
    this.app.use(morgan("dev"))
    this.app.use(cors())
    this.app.use(compression())
    this.app.use(helmet())
  }
  
  protected routes(): void {
    this.app.use("/api/v1/auth", AuthRoutes) 
    this.app.use("/api/v1/users", UserRoutes)
    this.app.use("/api/v1/teacher", TeacherRoutes)
    this.app.use("/api/v1/student", StudentRoutes)
    this.app.use("/api/v1/apps", AppsRoutes)
    this.app.use("/api/v1/studentactive", StudentActiveRoutes)
    this.app.use("/api/v1/usersonapps", UsersOnAppsRoutes)
    this.app.use("/api/v1/tagsonapps", TagsOnAppsRoutes)
  }
}

const port:number = 8000
const app = new App().app

export default app