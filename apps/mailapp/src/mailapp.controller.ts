import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { MailappService } from './mailapp.service';

@Controller()
export class MailappController {
  constructor(private readonly mailappService: MailappService) { }
  @EventPattern('send_email')
  async sendEmail(data: Record<string, unknown>) {
    console.log(data);

    return {
      msg: "correo enviado", data
    }
  }
}
