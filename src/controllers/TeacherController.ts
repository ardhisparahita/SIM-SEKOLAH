import { Request, Response } from "express";
import IController from "./ControllerInterface";
const db = require("../db/models")

class TeacherController implements IController {
  async index(req: Request, res: Response): Promise<Response> {
    const data = await db.teacher.findAll()
    return res.json({
      message: "All teacher",
      data
    })
  }

  async create(req: Request, res: Response): Promise<Response> {
    const {name, nip, status, user_id} = req.body

    const response = await db.teacher.create({
      name,
      nip,
      status,
      user_id
    })
    return res.json({
      message: "create successfully!",
      data: response
    })
  }
  async show(req: Request, res: Response): Promise<Response> {
    const {id} = req.params

    const data = await db.teacher.findOne({
      where: {
        id
      }
    })
    return res.json({
      message: "get one teacher",
      data
    })
  }

  async update(req: Request, res: Response): Promise<Response> {
    const {id} = req.params
    const {name, nip, status, user_id} = req.body

    await db.teacher.update(
      {
      name,
      nip,
      status,
      user_id
    },
    {
      where: {
        id
      }
    }
    )
    const data = await db.teacher.findOne({
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

    await db.teacher.destroy({
      where: {
        id
      }
    })
    return res.json({
      message: "deleted successfully"
    })
  }
}

export default new TeacherController()