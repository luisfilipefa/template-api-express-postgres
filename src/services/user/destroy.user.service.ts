import { HttpError } from "@errors/HttpError";
import { UserRepository } from "@repositories/user.repository";
import { getCustomRepository } from "typeorm";

export class DestroyUserService {
  async execute(userId: string) {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne(userId);

    if (!user) throw new HttpError(404, "User not found");

    try {
      await userRepository.remove(user);

      return true;
    } catch (error) {
      throw new HttpError(500, error.message);
    }
  }
}
