import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  private readonly users: User[] = [];
  signup(createUserDto: CreateUserDto): User {
    const { username, password } = createUserDto;
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    const user: User = {
      username: username,
      password: hash,
      salt: salt,
    };
    this.users.push(user);
    return user;
  }
  signin(createUserDto: CreateUserDto): boolean {
    const { username, password } = createUserDto;
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    let authCheck = false;
    this.users.forEach((item) => {
      const hash = bcrypt.hashSync(password, item.salt);
      if (item.username == username && item.password == hash) {
        authCheck = true;
      }
    });
    return authCheck;
  }
}
