import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { ServiceBModule } from './service-b.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(ServiceBModule, {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 3002,
    },
  });
  await app.listen();
}
bootstrap();
