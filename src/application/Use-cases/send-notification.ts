
import { Injectable } from "@nestjs/common";
import { Content } from "../entities/content";
import { NotificationModal } from "../entities/notification";
import { NotificationRepository } from "./notification-repository";

interface SendNotificationRequest{
    recipientId: string;
    content: string;
    category: string
}

interface SendNotificationResponse{
    notification: NotificationModal
}

@Injectable()
export class SendNotification{

    constructor(
        private NotificationRepository: NotificationRepository
    ){}

    async execute(request: SendNotificationRequest): Promise<SendNotificationResponse>{

        const {recipientId,content,category } = request
        const notification = new NotificationModal({
            recipientId,
            content: new Content(content),
            category
        })

        await this.NotificationRepository.create(notification)

        return{
            notification,
        }

    }
}