import {InMemoryDBEntity} from '@nestjs-addons/in-memory-db';
import {ApiProperty} from "@nestjs/swagger";

export class MenuEntity implements InMemoryDBEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  module: string;

  @ApiProperty()
  icon: string;
}
