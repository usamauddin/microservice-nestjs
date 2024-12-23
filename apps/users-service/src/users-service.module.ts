import { Module } from '@nestjs/common';
import { UsersServiceController } from './users-service.controller';
import { UsersService } from './users-service.service';

@Module({
  imports: [],
  controllers: [UsersServiceController],
  providers: [UsersService],
})
export class UsersServiceModule {}
