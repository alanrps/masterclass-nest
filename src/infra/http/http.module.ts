import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { MembersController } from './controllers/members.controller';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController, MembersController],
  providers: [SendNotification],
})
export class HttpModule {}
