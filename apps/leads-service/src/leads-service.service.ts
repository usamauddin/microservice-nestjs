import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class LeadsService {

  private prismaService = new PrismaClient();

  async findAllLeads() {
    try {
    return await this.prismaService.lead.findMany()      
    } catch (error) {
      throw error
    }
  }
  

}
