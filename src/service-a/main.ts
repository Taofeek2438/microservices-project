import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { ServiceAModule } from './service-a.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(ServiceAModule, {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 3001,
    },
  });
  await app.listen();
}
bootstrap();
//npx ts-node service-a/main.ts
