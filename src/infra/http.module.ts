import {Module} from '@nestjs/common'
import { AppController } from './http/controllers/app.controller'
import { DatabaseModule } from './database/Database'
import { SendNotification } from 'src/application/Use-cases/send-notification'

@Module({
    imports:[DatabaseModule],
    controllers: [AppController],
    providers:[SendNotification],
})

export class HttpModule{}