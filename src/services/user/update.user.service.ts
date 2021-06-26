import { HttpError } from "@errors/HttpError";
import { User } from "@models/user.model";
import { UserRepository } from "@repositories/user.repository";
import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";

interface IUpdateUserParams extends Partial<User> {}

export class UpdateUserService {
  async execute(userId: string, values: IUpdateUserParams) {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne(userId);

    if (!user) throw new HttpError(404, "User not found");

    const updatedUser = await userRepository.save({
      ...classToPlain(user),
      ...values,
    });

    return updatedUser;
  }
}
