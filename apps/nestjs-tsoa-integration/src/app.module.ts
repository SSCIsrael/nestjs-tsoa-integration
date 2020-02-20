import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {DogsController} from "../../dogs/src/dogs.controller";
import {CatsController} from "../../cats/src/cats.controller";

@Module({
  imports: [],
  controllers: [AppController, DogsController, CatsController],
  providers: [AppService],
})
export class AppModule {}
