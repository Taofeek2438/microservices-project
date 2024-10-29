import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { combineLatest, map, Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('SERVICE_A') private readonly serviceAClient: ClientProxy,
    @Inject('SERVICE_B') private readonly serviceBClient: ClientProxy,
  ) {}
  async getDataFromServiceA() {
    return this.serviceAClient.send({ cmd: 'get_data' }, {
      number1: 2,
      number2: 3,
    });
  }
}