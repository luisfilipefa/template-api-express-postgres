import { HttpError } from "@errors/HttpError";
import { UserRepository } from "@repositories/user.repository";
import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";

interface IStoreUserParams {
  name: string;
  avatar: string;
  email: string;
  password: string;
}

export class StoreUserService {
  async execute({ name, avatar, email, password }: IStoreUserParams) {
    const userRepository = getCustomRepository(UserRepository);

    const userExists = await userRepository.findOne({ email });

    if (userExists) throw new HttpError(409, "User already exists");

    const user = await userRepository.create({ name, avatar, email, password });

    await userRepository.save(user);

    return classToPlain(user);
  }
}
