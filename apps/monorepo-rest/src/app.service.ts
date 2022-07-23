import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('EMAIL_SERVICE') private client: ClientProxy,
  ) {
  }
  sendEmail(data: any): string {
    this.client.emit("send_email", data);
    return "hola";
  }
}
