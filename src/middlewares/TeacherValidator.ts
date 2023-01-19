import { Request, Response, NextFunction } from "express";
import { check, validationResult} from "express-validator"

const validateCreateTeacher = [
  check("name").isString().withMessage("name must be string!"),
  check("nip").isString().withMessage("nip must be string!"),
  check("status").isString().withMessage("status must be string!"),
  check("user_id").isInt().withMessage("user id must be integer!"),

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

export {validateCreateTeacher}