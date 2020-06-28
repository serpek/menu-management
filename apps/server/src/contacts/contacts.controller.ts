import {Controller, Get, HttpService, HttpStatus, Param} from '@nestjs/common';
import {ApiOperation, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {plainToClass} from "class-transformer";

import {ContactEntity} from "./contact.entity";

@ApiTags('contacts')
@Controller(`contacts`)
@ApiResponse({status: HttpStatus.FORBIDDEN, description: 'Forbidden.'})
@ApiResponse({status: HttpStatus.BAD_REQUEST, description: 'Bad request.'})
@ApiResponse({status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Server error.'})
export class ContactsController {
  constructor(private httpService: HttpService) {
  }

  @Get()
  @ApiOperation({operationId: 'getContacts'})
  @ApiResponse({
    isArray: true,
    status: HttpStatus.OK,
    type: ContactEntity
  })
  async getContacts(): Promise<ContactEntity[]> {
    try {
      const {data} = await this.httpService.get('https://5ef8b4f08e584a00163d9abd.mockapi.io/api/v1/Contacts?limit=10').toPromise();
      const users: ContactEntity[] = plainToClass(ContactEntity, data as any[]);
      return Promise.resolve(users);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  @Get(':id')
  @ApiOperation({operationId: 'getContactById'})
  @ApiParam({name: 'id', type: Number})
  @ApiResponse({
    status: HttpStatus.OK,
    type: ContactEntity
  })
  async getContactById(@Param('id') id: number): Promise<ContactEntity> {
    try {
      const {data} = await this.httpService.get(`https://5ef8b4f08e584a00163d9abd.mockapi.io/api/v1/Contacts/${id}`).toPromise();
      const user: ContactEntity = plainToClass(ContactEntity, data);
      return Promise.resolve(user);
    } catch (e) {
      return Promise.reject(e);
    }
  }

}
