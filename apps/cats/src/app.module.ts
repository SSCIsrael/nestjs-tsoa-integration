import { Module } from '@nestjs/common';
import { CatsController } from './catsController';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [AppService],
})
export class AppModule {}
