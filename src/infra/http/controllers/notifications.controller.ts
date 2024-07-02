import { Controller, Post, Body } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { CreateNotificationDTO } from '../dto/create-notification';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async getNotifications(@Body() body: CreateNotificationDTO) {
    const { recipientId, content, category } = body;

    const { notification } =  await this.sendNotification.execute({
      recipientId, content, category
    });

    return notification;
  }
}
