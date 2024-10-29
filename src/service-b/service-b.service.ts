import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceBService {
  getHello(data: any): string {
    return 'Hello ' + data.message;
  }
}