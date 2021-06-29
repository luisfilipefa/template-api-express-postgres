import { HttpError } from "@errors/HttpError";
import { UserRepository } from "@repositories/user.repository";
import { classToPlain } from "class-transformer";
import { compare } from "bcryptjs";
import { generateToken } from "@utils/generateToken";
import { getCustomRepository } from "typeorm";

interface IStoreSessionParams {
  email: string;
  password: string;
}

export class StoreSessionService {
  async execute({ email, password }: IStoreSessionParams) {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({ email });

    if (!user) throw new HttpError(401, "Invalid credentials");

    const pwdMatches = compare(password, user.password);

    if (!pwdMatches) throw new HttpError(401, "Invalid credentials");

    const token = generateToken({ id: user.id });

    return { token, user: classToPlain(user) };
  }
}
