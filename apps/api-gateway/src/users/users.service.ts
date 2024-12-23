import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(@Inject('USERS_CLIENT') private usersClient: ClientProxy) {}

  async login(body) {
    try {
      // return 'hello'
      // return await firstValueFrom(this.usersClient.send('users.login', body))
      return await this.usersClient.send('users.login', body)
    } catch (error) {
      console.log('1')
      throw error
    }
  }
}
