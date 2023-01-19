import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";

const validateCreateApps = [
  check("name").isString().withMessage("name must be string!"),
  check("url").isString().withMessage("url must be string!"),

  (req: Request, res: Response, next: NextFunction) => {
    const error = validationResult(req)
    if(!error.isEmpty()) {
      return res.status(422).json({
        error: error.array()
      })
    }
    next()
  }
]

export {validateCreateApps}