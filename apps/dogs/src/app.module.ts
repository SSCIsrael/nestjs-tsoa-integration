import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [DogsController],
  providers: [AppService],
})
export class AppModule {}
