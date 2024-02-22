import { NotificationModal } from "src/application/entities/notification";
import { NotificationRepository } from "src/application/repositories/notification-repository";


export class MemoryNotification implements  NotificationRepository {
    public notifications: NotificationModal[] = [];

    async create(notification:NotificationModal){
        this.notifications.push(notification);
    }
}
