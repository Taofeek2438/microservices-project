import { Controller, Get } from '@nestjs/common';
import { ServiceBService } from './service-b.service';
import { MessagePattern, RpcException } from '@nestjs/microservices';

@Controller('service-b')
export class ServiceBController {
  constructor(private readonly serviceBService: ServiceBService) {}

    @MessagePattern({ cmd: 'get_data' })
    async handleGetData(data: any) {
        try {
            // Your logic here
            return await this.serviceBService.getHello(data);
        } catch (error) {
            console.error('Error handling message:', error);
            throw new RpcException('An error occurred while processing your request');
        }
    }
}