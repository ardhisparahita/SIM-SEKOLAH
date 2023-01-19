import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import IController from "./ControllerInterface";
const db = require("../db/models")

class StudentActiveController implements IController {
  async index(req: Request, res: Response): Promise<Response> {
    const data = await db.student_active.findAll()
    return res.json({
      message: "all student active",
      data
    })
  }

  async create(req: Request, res: Response): Promise<Response> {
    const {tahun_pelajaran, kelas, student_id} = req.body

    const response = await db.student_active.create({
      tahun_pelajaran,
      kelas,
      student_id
    })
    return res.json({
      message: "create successfully!",
      data: response
    })
  }

  async show(req: Request, res: Response): Promise<Response> {
    const {id} = req.params

    const data = await db.student_active.findOne({
      where: {
        id
      }
    })
    return res.json({
      message: "get one student active",
      data
    })
  }

  async update(req: Request, res: Response): Promise<Response> {
    const {id} = req.params
    const {tahun_pelajaran, kelas, student_id} = req.body

    await db.student_active.update({
      tahun_pelajaran,
      kelas,
      student_id
    }, {
      where: {
        id
      }
    })
    const data = await db.student_active.findOne({
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

    await db.student_active.destroy({
      where: {
        id
      }
    })
    return res.json({
      message: "delete successfully!"
    })
  }
}

export default new StudentActiveController()