import { HttpError } from "@errors/HttpError";
import { UserRepository } from "@repositories/user.repository";
import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";

export class ShowUserService {
  async execute(userId: string) {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne(userId);

    if (!user) throw new HttpError(404, "User not found");

    return classToPlain(user);
  }
}
