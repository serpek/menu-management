import {Body, Controller, Delete, Get, HttpStatus, Param, Post, Put} from '@nestjs/common';
import {InMemoryDBService} from "@nestjs-addons/in-memory-db";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {MenuEntity} from "./menu.entity";
import {ApiImplicitParam} from "@nestjs/swagger/dist/decorators/api-implicit-param.decorator";
import {ApiImplicitBody} from "@nestjs/swagger/dist/decorators/api-implicit-body.decorator";

@ApiTags('menu')
@Controller(`menu`)
@ApiResponse({status: HttpStatus.FORBIDDEN, description: 'Forbidden.'})
@ApiResponse({status: HttpStatus.BAD_REQUEST, description: 'Bad request.'})
@ApiResponse({status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Server error.'})
export class MenuManagerController {
  constructor(private menuService: InMemoryDBService<MenuEntity>) {
  }

  @Get()
  @ApiOperation({operationId: 'getAllMenu'})
  @ApiResponse({
    isArray: true,
    status: HttpStatus.OK,
    type: MenuEntity,
    description: ''
  })
  getAllMenu(): MenuEntity[] {
    return this.menuService.getAll();
  }

  @Get('seed')
  @ApiOperation({operationId: 'seedMenu'})
  @ApiResponse({
    isArray: true,
    status: HttpStatus.OK,
    type: MenuEntity,
    description: ''
  })
  seedMenu() {
    const recordFactory = (idx: number): Partial<MenuEntity> => ({id: idx, title: `Menu ${idx}`, module: `module ${idx}`, icon: 'k-i-user'});
    this.menuService.seed(recordFactory, 10);
    return this.menuService.getAll();
  }

  @Post()
  @ApiOperation({operationId: 'createMenu'})
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: MenuEntity,
    description: 'Menu create response',
    isArray: false
  })
  createMenu(@Body() menu: MenuEntity): MenuEntity {
    return this.menuService.create(menu);
  }

  @Post('/many')
  @ApiOperation({operationId: 'createManyMenu'})
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: MenuEntity,
    description: 'Menu multiple create response',
    isArray: true
  })
  @ApiImplicitBody({content: undefined, name: "MenuEntity", type: MenuEntity, isArray: true})
  async createManyMenu(@Body() menu: MenuEntity[]): Promise<MenuEntity[]> {
    let createManyAsync = await this.menuService.createManyAsync(menu).toPromise();
    return Promise.resolve(createManyAsync);
  }

  @Put()
  @ApiOperation({operationId: 'updateMenu'})
  @ApiResponse({
    status: HttpStatus.OK,
    type: Boolean,
    description: 'Menu update response',
    links: null,
    isArray: false
  })
  async updateMenu(@Body() menu: MenuEntity): Promise<boolean> {
    try {
      await this.menuService.updateAsync(menu).toPromise();
      return Promise.resolve(true);
    } catch (e) {
      return Promise.reject(false);
    }
  }

  @Delete(':id')
  @ApiOperation({operationId: 'deleteMenu'})
  @ApiResponse({
    status: HttpStatus.OK,
    type: Boolean,
    description: 'Menu delete response',
    links: null,
    isArray: false
  })
  @ApiImplicitParam({name: 'id', type: Number})
  async deleteMenu(@Param('id') id: number): Promise<boolean> {
    try {
      await this.menuService.deleteAsync(+id).toPromise();
      return Promise.resolve(true);
    } catch (e) {
      return Promise.reject(false);
    }
  }

  @Get(':id')
  @ApiOperation({operationId: 'getMenuById'})
  @ApiImplicitParam({name: 'id', type: Number})
  @ApiResponse({
    status: HttpStatus.OK,
    type: MenuEntity,
    description: 'Menu id param query response',
    isArray: true
  })
  async getMenuById(@Param('id') id: number): Promise<MenuEntity[]> {
    try {
      const response = await this.menuService.queryAsync(data => data.id === +id).toPromise();
      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
