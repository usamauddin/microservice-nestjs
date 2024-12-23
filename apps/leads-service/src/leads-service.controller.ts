import { Controller, Get } from '@nestjs/common';
import { LeadsService } from './leads-service.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class LeadsServiceController {
  constructor(private readonly leadsService: LeadsService) {}

  @MessagePattern('leads.create')
  async createLeads(@Payload() payload) {
    try {
      return 'lead created';
    } catch (error) {
      throw error;
    }
  }

  @MessagePattern('leads.get')
  async getLeads() {
    try {
      return await this.leadsService.findAllLeads()
    } catch (error) {
      throw error;
    }
  }
}
