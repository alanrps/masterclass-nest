import { send } from "process";
import { SendNotification } from "./send-notification"
import { Content } from "../entities/content";
import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository";


describe('Send Notification', () => {
    it('should be able to send a notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const sendNotification = new SendNotification(notificationsRepository); 

        const { notification } = await sendNotification.execute({
            content: 'programming event incoming',
            category: 'events',
            recipientId: '342342ASDAS',
        });

        expect(notificationsRepository.notifications[0]).toEqual(notification);
        expect(notificationsRepository.notifications).toHaveLength(1);
    })
})