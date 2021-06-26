import { UserRepository } from "@repositories/user.repository";
import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";

export class IndexUserService {
  async execute() {
    const userRepository = getCustomRepository(UserRepository);

    const users = await userRepository.find();

    return classToPlain(users);
  }
}
