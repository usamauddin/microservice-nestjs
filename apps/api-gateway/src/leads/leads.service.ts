import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';


@Injectable()
export class LeadsService {
   constructor(@Inject('LEADS_CLIENT') private leadsClient: ClientProxy) {}

   async createLead(body) {
    try {
      return this.leadsClient.send('leads.create', body);
    } catch (error) {
      throw error
    }
   }
}
