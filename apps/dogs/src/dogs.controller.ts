import {Controller, Get, Param, Put, Query} from '@nestjs/common';
import { AppService } from './app.service';
import {IDog} from "./dog.interface";
import {Route} from "tsoa";

@Controller('/dogs')
@Route('dogs')
export class DogsController {
  constructor(private readonly appService: AppService) {}

  @Put(':id')
  getById(@Param('id') id : number): IDog {
    return {
      id,
      name: 'Snoopy',
      age: 2,
    }
  }

  @Get('/byName/:name')
  getByName(@Param('name') name: string, @Query('minAge') minAge: number): IDog[]{
    return [
      {id: 1, name, age:minAge},
      {id: 2, name, age:minAge}
    ]
  }
}
