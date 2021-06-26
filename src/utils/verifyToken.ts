import { HttpError } from "@errors/HttpError";
import { ITokenPayload } from "@interfaces/token.interface";
import { verify } from "jsonwebtoken";

export const verifyToken = (token: string) => {
  try {
    const decoded = verify(token, process.env.JWT_SECRET) as ITokenPayload;

    return decoded;
  } catch (error) {
    throw new HttpError(401, "Invalid token");
  }
};
