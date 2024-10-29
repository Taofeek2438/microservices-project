import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceAService {
    getData(data: any) {
        // Logic to handle the data and return a response
        return { response: `The Addition of ${data.number1} and ${data.number2} is`, result: data.number1 + data.number2 };
    }
}