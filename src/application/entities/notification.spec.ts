import { Content } from "./content";
import { Notification } from "./notification";

describe('Notification', ()=>{

    test('it should be able to crate a notification ',()=>{
        const notification = new Notification({
            content: new Content('Solicitação de amizade'),
            category: 'Social',
            recipientId: 'Exemplo de recipientId',

        })
        
        expect(notification).toBeTruthy(); 
     })
     
})

