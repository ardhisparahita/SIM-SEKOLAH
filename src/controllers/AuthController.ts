import { Request, Response } from "express";
import Authentication from "../utils/Authentication";
const db = require("../db/models")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

class AuthController {
  register = async (req: Request, res: Response):Promise<Response> =>  {
    const {username, password} = req.body
    const hashedPassword: string = await Authentication.passwordHash(password)

    const response = await db.user.create({
      username,
      password: hashedPassword
    })
    return res.send({
      message: "register success",
      data: response
    })
  }

  login = async (req: Request, res: Response): Promise<Response> => {
    try {
      const {username, password} = req.body

      const users = await db.user.findOne({
        where: {
          username
        }
      })

      const compare = await Authentication.comparePassword(password, users.password)

      if (compare) {
        const token = Authentication.generateToken(users.id, username, users.password)
        return res.json({
          token
        })
      }
      return res.json({
        message: "auth failed"
      })
    }
    catch(err) {
      return res.json({
        message: "username is not found",
        error: err
      })
    }
  }
  
}

export default new AuthController()