import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users-service.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class UsersServiceController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('users.login')
  async login(@Payload() payload) {
    try {
      return payload
    } catch (error) {
      throw error
    }
  } 
}
