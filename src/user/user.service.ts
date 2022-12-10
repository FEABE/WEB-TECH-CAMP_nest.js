import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHi(): string {
    return 'hi this is user';
  }
}
