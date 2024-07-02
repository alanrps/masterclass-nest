import { Content } from "./content"
import { Notification } from "./notification"

describe('Notification', () => {
    it('should be able to create notification', () => {
        const notification = new Notification({
            content: new Content('programming event incoming'),
            category: 'events',
            recipientId: '342342ASDAS',

        })

        expect(notification).toBeTruthy();
    })
})