import { NestFactory } from '@nestjs/core';
import { UsersServiceModule } from './users-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(UsersServiceModule, {
    transport: Transport.TCP,
    options: { port: 3001, host: 'localhost' }
  });
  await app.listen();
  console.log('listening at port 3001');
}
bootstrap();
