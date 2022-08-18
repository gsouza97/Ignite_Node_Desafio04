import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    if (user_id) {
      console.log(user_id);
    }
    const users = this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersUseCase };
