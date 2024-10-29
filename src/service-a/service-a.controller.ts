import { Controller, Get } from '@nestjs/common';
import { ServiceAService } from './service-a.service';
import { MessagePattern, RpcException } from '@nestjs/microservices';

@Controller('service-a')
export class ServiceAController {
  constructor(private readonly serviceAService: ServiceAService) {}

  @MessagePattern({ cmd: 'get_data' }) // Message pattern to listen for
  getData(data: any) {
    return this.serviceAService.getData(data);
  }
}