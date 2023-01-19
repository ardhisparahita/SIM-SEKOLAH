import { Response, Request } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import IController from "./ControllerInterface";
const db = require("../db/models")

class TagsOnAppsController implements IController {
  async index(req: Request, res: Response): Promise<Response> {
    const data = await db.tags_on_apps.findAll()

    return res.json({
      message: "find all tags on apps",
      data
    })
  }

  async create(req: Request, res: Response): Promise<Response> {
    const {tags, app_id, user_id} = req.body

    const response = await db.tags_on_apps.create({
      tags,
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
    const data = await db.tags_on_apps.findOne({
      where: {
        id
      }
    })
    return res.json({
      message: "get one tags on apps",
      data
    })
  }

  async update(req: Request, res: Response): Promise<Response> {
    const {id} = req.params
    const {tags, user_id, app_id} = req.body

    await db.tags_on_apps.update({
      tags,
      app_id,
      user_id
    }, {
      where: {
        id
      }
    })
    const data = await db.tags_on_apps.findOne({
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

    await db.tags_on_apps.destroy({
      where: {
        id
      }
    })
    return res.json({
      message: 'delete successully!'
    })
  }
}

export default new TagsOnAppsController()