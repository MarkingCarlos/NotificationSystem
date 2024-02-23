import { NotificationModal } from "src/application/entities/notification";
import { NotificationRepository } from "src/application/Use-cases/notification-repository";


export class MemoryNotification implements  NotificationRepository {
    public notifications: NotificationModal[] = [];

    async create(notification:NotificationModal){
        this.notifications.push(notification);
    }
}
