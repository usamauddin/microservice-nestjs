import { Module } from '@nestjs/common';
import { LeadsServiceController } from './leads-service.controller';
import { LeadsService } from './leads-service.service';

@Module({
  imports: [],
  controllers: [LeadsServiceController],
  providers: [LeadsService],
})
export class LeadsServiceModule {}
