import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import IController from "./ControllerInterface";
const db = require("../db/models")

class UsersOnAppsController implements IController {
  async index(req: Request, res: Response): Promise<Response> {
    const data = await db.users_on_apps.findAll()
    return res.json({
      message: "all users on apps",
      data
    })
  }

  async create(req: Request, res: Response): Promise<Response> {
    const {app_id, user_id} = req.body

    const response = await db.users_on_apps.create({
      app_id,
      user_id
    })
    return res.json({
      message: "create successfully!",
      data: response
    })
  }

  async show(req: Request, res: Response): Promise<Response> {
    const {id} = req.params
    
    const data = await db.users_on_apps.findOne({
      where: {
        id
      }
    })
    return res.json({
      message: "get one users on app",
      data
    })
  }

  async update(req: Request, res: Response): Promise<Response> {
    const {id} = req.params
    const {app_id, user_id} = req.body

    await db.users_on_apps.update({
      app_id,
      user_id
    }, {
      where: {
        id
      }
    })
    const data = await db.users_on_apps.findOne({
      where: {
        id
      }
    })
    return res.json({
      message: "update successfully!",
      data
    })
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const {id} = req.params

    await db.users_on_apps.destroy({
      where: {
        id
      }
    })
    return res.json({
      message: "delete successfully!"
    })
  }
}

export default new UsersOnAppsController()