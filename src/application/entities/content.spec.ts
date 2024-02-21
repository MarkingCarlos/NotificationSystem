import { Content } from "./content"

describe('Notification Content', ()=>{

    test('it should be able to crate a notification content',()=>{
        const content = new Content('Você recebeu uma amizade')
        
        expect(content).toBeTruthy(); 
     })
     
     test('it should not be able to crate a notification content with less then 5 words',()=>{
         
         
         expect(()=> new Content('ola')).toThrow()
      })
     
      test('it should not be able to crate a notification content with more then 5 words',()=>{
         
         
         expect(()=> new Content('a'.repeat(241))).toThrow()
      })
})

