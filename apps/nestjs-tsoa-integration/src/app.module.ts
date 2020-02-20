import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {DogsController} from "../../dogs/src/dogsController";
import {CatsController} from "../../cats/src/catsController";

@Module({
  imports: [],
  controllers: [AppController, DogsController, CatsController],
  providers: [AppService],
})
export class AppModule {}
