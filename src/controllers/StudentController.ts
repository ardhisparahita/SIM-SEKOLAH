import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import IController from "./ControllerInterface";
const db = require("../db/models")

class StudentController implements IController {
  async index(req: Request, res: Response): Promise<Response> {
    const data = await db.student.findAll()
    return res.json({
      message: "all student",
      data
    })
  }

  async create(req: Request, res: Response): Promise<Response> {
    const {name, nis, status, user_id} = req.body

    const response = await db.student.create({
      name,
      nis,
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

    const data = await db.student.findOne({
      where: {
        id
      }
    })
    return res.json({
      message: "find one student",
      data
    })
  }

  async update(req: Request, res: Response): Promise<Response> {
    const {id} = req.params
    const {name, nis, status, user_id} = req.body

    await db.student.update({
      name,
      nis,
      status,
      user_id
    }, {
      where: {
        id
      }
    })
    const data = await db.student.findOne({
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

    await db.student.destroy({
      where: {
        id
      }
    })
    return res.json({
      message: "delete successfully!"
    })
  }
}

export default new StudentController()