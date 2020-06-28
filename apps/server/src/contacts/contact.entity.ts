import {ApiProperty} from "@nestjs/swagger";

export class ContactEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  avatar: string;

  @ApiProperty()
  position: string;
}
