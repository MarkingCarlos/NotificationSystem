import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateNotificationBody } from '../dto/create-notification-body';
import { SendNotification } from 'src/application/Use-cases/send-notification';

@Controller('notification')
export class AppController {
  constructor(
    private sendNotification: SendNotification
  ){}

  @Post()
   async create(@Body() body: CreateNotificationBody) {
    //console.log(body);
    const {recipientId, content,category} = body
    const {notification} = await this.sendNotification.execute({
      recipientId,
      content,
      category
    }); 

    return {notification};
    
   }
 }
