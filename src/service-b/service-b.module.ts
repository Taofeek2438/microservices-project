import { Module } from '@nestjs/common';
import { ServiceBController } from './service-b.controller';
import { ServiceBService } from './service-b.service';

@Module({
  controllers: [ServiceBController],
  providers: [ServiceBService],
})
export class ServiceBModule {}