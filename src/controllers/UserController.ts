import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
const db = require("../db/models")
import IController from "./ControllerInterface";

class UserController implements IController {
  async index(req: Request, res: Response): Promise<Response> {
    const data = await db.user.findAll()
    return res.json({
      message: "all user",
      data
    })
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const {username, password} = req.body
      
      const response = await db.user.create({
        username,
        password
      })
      return res.json({
        message: "create user successfully",
        data: response
      })
    } catch (e) {
      return res.json({
        message: "create failed"
      })
    }
  }

  async show(req: Request, res: Response): Promise<Response> {
    const {id} = req.params
    const data = await db.user.findOne({
      where: {
        id
      }
    })
    if (!data) res.json({
      message: "user not found"
    })
    return res.json({
      message: "get one user", 
      data
    })
  }
  
  async update(req: Request, res: Response): Promise<Response> {
    const {id} = req.params
    const {username, password} = req.body

    await db.user.update(
      {
        username,
        password,
      },
      {
        where: {
          id
        }
      }
    )
    const data = await db.user.findOne({
      where: {
        id
      }
    })
    return res.json({
      message: "update user successfully!",
      data 
    })
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const {id} = req.params

    await db.user.destroy({
      where: {
        id
      }
    })
    return res.json({
      message: "deleted user successfully!",
    })
  }

}

export default new UserController()