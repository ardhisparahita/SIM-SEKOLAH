import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
export const auth = (req: Request, res: Response, next: NextFunction): any => {
  if(!req.headers.authorization) {
    return res.status(401).json({
      message: "not authenticated"
    })
  }

  let secretKey: any = process.env.JWT_SECRET_KEY 
  const token: string = req.headers.authorization.split(" ")[1]

  const credentials: string | Object= jwt.verify(token, secretKey)
  if(credentials) req.app.locals.credentials = credentials
  return next()
}