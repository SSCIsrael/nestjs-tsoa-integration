import { Module } from '@nestjs/common';
import { DogsController } from './dogsController';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [DogsController],
  providers: [AppService],
})
export class AppModule {}
