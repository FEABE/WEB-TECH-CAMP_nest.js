// eslint-disable-next-line prettier/prettier
import { Controller, Get } from "@nestjs/common";
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getHi(): string {
    return this.userService.getHi();
  }
}
