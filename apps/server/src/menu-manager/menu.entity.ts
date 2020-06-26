import {InMemoryDBEntity} from '@nestjs-addons/in-memory-db';
import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";

export class MenuEntity implements InMemoryDBEntity {
  @ApiModelProperty()
  id: number;

  @ApiModelProperty()
  title: string;

  @ApiModelProperty()
  module: string;

  @ApiModelProperty()
  icon: string;
}
