import { NotificationModal } from "../entities/notification";

export abstract class NotificationRepository{
    abstract create(notification: NotificationModal): Promise<void>;
}