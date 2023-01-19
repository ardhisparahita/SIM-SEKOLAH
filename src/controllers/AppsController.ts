import { Request, Response } from "express"
import { ParamsDictionary } from "express-serve-static-core"
import { ParsedQs } from "qs"
const db = require("../db/models")
import IController from "./ControllerInterface"

class AppsController implements IController {
  async index(req: Request, res: Response): Promise<Response> {
    const data = await db.apps.findAll() 
      return res.json({
        message: "all aps",
        data
      })
  }

  async create(req: Request, res: Response): Promise<Response> {
    try{
    const {name, url} = req.body

    const response = await db.apps.create({
      name,
      url
    })
    return res.json({
      message: "create apps successfully!",
      data: response
    })
  } catch(e) {
    return res.json({
      message: "create failed!"
    })
    }
  }

  async show(req: Request, res: Response): Promise<Response> {
    const {id} = req.params
    const data = await db.apps.findOne({
      where: {
        id
      }
    })
    if(!data) res.json({
      message: "user not found"
    })
    return res.json({
      message: "get one data",
      data
    })
  }

  async update(req: Request, res: Response): Promise<Response> {
    const {id} = req.params
    const {name, url} = req.body

    await db.apps.update({
      name,
      url
    }, {
      where: {
        id
      }
    })
    const data = await db.apps.findOne({
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

    await db.apps.destroy({
      where: {
        id
      }
    })
    return res.json({
      message: "delete apps successfully!"
    })
  }

}

export default new AppsController