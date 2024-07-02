import { Module } from '@nestjs/common';
import { AppController } from './infra/http/controllers/app.controller';
import { PrismaService } from './database/prisma/prisma.service';
import { MembersRepository } from './repositories/members-repository';
import { PrismaMembersRepository } from './repositories/prisma/members-repository';
import { NotificationsController } from './infra/http/controllers/notifications.controller';
import { HttpModule } from './infra/http/http.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [HttpModule, DatabaseModule],
  // controllers: [AppController, NotificationsController, MembersController],
  // providers: [
  //   PrismaService,
  //   {
  //     provide: MembersRepository,
  //     useClass: PrismaMembersRepository,
  //   },
  // ],
})
export class AppModule {}
