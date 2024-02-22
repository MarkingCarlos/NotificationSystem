import { NotificationModal } from "src/application/entities/notification";
import { NotificationRepository } from "src/application/repositories/notification-repository";
import { PrismaService } from "./prisma.services";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaNotification implements NotificationRepository{

    constructor(private prismaservice: PrismaService){}


    async create(notification: NotificationModal): Promise<void> {
        await this.prismaservice.notification.create({
            data: {
                id: notification.id,
                content: notification.content.value,
                category: notification.category,
                recipientId: notification.recipientId,
                readAT: notification.readAt,
                createdAT: notification.createdAT,
            }
        })
    }
}
