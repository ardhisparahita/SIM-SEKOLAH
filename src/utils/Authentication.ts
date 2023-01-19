import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

class Authentication {
  public static passwordHash = (password: string): Promise<string> => {
    return bcrypt.hash(password, 12)
  }

  public static comparePassword = async(
    text: string,
    encryptedPassword: string
  ): Promise<boolean> => {
    const result = await bcrypt.compare(text, encryptedPassword)
    return result
  }

  public static generateToken = (
    id: number,
    username: string,
    password: string
  ): string => {
    const secretKey: any = process.env.JWT_SECRET_KEY || "secret"
    const token: string = jwt.sign({id, username, password}, secretKey)
    return token
  }
}

export default Authentication