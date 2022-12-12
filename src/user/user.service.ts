import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  signup(): string {
    return 'hi this is user';
  }
}
