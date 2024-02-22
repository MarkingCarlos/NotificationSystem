import { MemoryNotification } from "../../../test/Repositories/MemoryNotifications";
import { SendNotification } from "./send-notification"



describe('send notification', () => {
    test('should be able to send notificatiopn', async () => {
        const NotificationRepository = new MemoryNotification();
        const sendnotification = new SendNotification(NotificationRepository);

        const {notification} = await sendnotification.execute({
            content: 'This is a notification',
            category: 'Social',
            recipientId: 'example'
        });

        expect(NotificationRepository.notifications).toHaveLength(1);
        expect(NotificationRepository.notifications[0]).toEqual(notification);

    });
});