import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";
const db = require("../db/models")

const validateAuth = [
  check("username")
  .isString()
  .withMessage("username must be string!")
  .custom(async(username) => {
    const existingUsername = await db.user.findOne({
      where: {
        username
      }
    })
    if(existingUsername) throw new Error("username already exist")
  }),


  check("password")
  .isLength({min: 6})
  .withMessage("password must be more than 6 characters"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    
    if(!errors.isEmpty()) {
      return res.status(422).json({error: errors.array()})
    }
    next()
  }
]

export {validateAuth}