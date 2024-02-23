import { Module } from "@nestjs/common";
import { PrismaService } from "../database/prisma/prisma.services";
import { NotificationRepository } from "src/application/Use-cases/notification-repository";
import { PrismaNotification } from "../database/prisma/prismaNotificationRepository";


@Module({
  providers: [PrismaService,{
    provide:NotificationRepository,
    useClass: PrismaNotification,
  }],
  exports:[
    NotificationRepository,
  ]
})
export class DatabaseModule{}