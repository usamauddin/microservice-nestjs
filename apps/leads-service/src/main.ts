import { NestFactory } from '@nestjs/core';
import { LeadsServiceModule } from './leads-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    LeadsServiceModule,
    { transport: Transport.TCP, options: { port: 3002 } },
  );

  await app.listen();
  console.log('listening at port 3002');
}
bootstrap();
