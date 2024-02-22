import { Module } from "@nestjs/common";
import { HttpModule } from "../http.module";
import { DatabaseModule } from "../database/Database";

@Module({
  imports:[HttpModule,DatabaseModule]
})
export class AppModule{}