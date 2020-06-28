import {ApiProperty} from "@nestjs/swagger";

export class ResponseDto<T> {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  result: T;
}
