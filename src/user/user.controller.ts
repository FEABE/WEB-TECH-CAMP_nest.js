import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('signup')
  signup(@Body() createUserDto: CreateUserDto): User {
    const { username, password } = createUserDto;
    return this.userService.signup(createUserDto);
  }
  @Post('signin')
  signin(@Body() createUserDto: CreateUserDto): boolean {
    return this.userService.signin(createUserDto);
  }
}
