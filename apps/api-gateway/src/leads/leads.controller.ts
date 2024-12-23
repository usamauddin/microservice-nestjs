import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LeadsService } from './leads.service';


@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Post('create')
   async createLead(@Body() body) {
    try {
      return this.leadsService.createLead(body)
    } catch (error) {
      throw error
    }
   } 

   @Get('get-all')
   async getLeads() {
    try {
      return this.leadsService.getAllLeads()
    } catch (error) {
       throw error      
    }
   }

}
