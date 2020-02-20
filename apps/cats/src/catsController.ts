import {Controller, Get, Param, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {ICat} from "./cat.interface";

@Controller('cats')
export class CatsController {
  constructor(private readonly appService: AppService) {}

  @Get(':name')
  getName(@Param('name') name: string): ICat {
    return {name}
  }

  @Post()
  addCat(cat: ICat): string{
    return cat.name;
  }
}
