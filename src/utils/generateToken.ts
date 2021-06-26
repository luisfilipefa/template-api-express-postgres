import { ITokenPayload } from "@interfaces/token.interface";
import { sign } from "jsonwebtoken";

export const generateToken = ({ id }: ITokenPayload) => {
  const token = sign({ id }, process.env.JWT_SECRET, {
    algorithm: "HS512",
    expiresIn: "1d",
    subject: id,
  });

  return token;
};
