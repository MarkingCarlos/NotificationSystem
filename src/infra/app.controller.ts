import { Body, Controller, Get, Post } from '@nestjs/common';
import {randomUUID} from 'node:crypto'
import { PrismaService } from './prisma.services';
import { CreateNotificationBody } from './create-notification-body';

@Controller('notification')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany()
  }

   @Post()
   async create(@Body() body: CreateNotificationBody) {
    //console.log(body);
    const {recipientId, content,category} = body
      await this.prisma.notification.create({
        data:{
          id: randomUUID(),
          content,
          category,
          recipientId
        }
      })
   }
 }
