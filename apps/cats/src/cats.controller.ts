import {Controller, Get, Param, Post, Body} from '@nestjs/common';
import { AppService } from './app.service';
import {ICat} from "./cat.interface";
import {Route} from "tsoa";

@Controller('cats')
@Route('cats')
export class CatsController {
  constructor(private readonly appService: AppService) {}

  @Get(':name')
  getName(@Param('name') name: string): ICat {
    return {name}
  }

  @Post()
  addCat(@Body() cat: ICat): string{
    return cat.name;
  }
}
