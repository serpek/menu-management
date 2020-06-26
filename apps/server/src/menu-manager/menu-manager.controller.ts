import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {InMemoryDBService} from "@nestjs-addons/in-memory-db";
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {MenuEntity} from "./menu.entity";

@ApiTags('menu')
@Controller(`menu`)
export class MenuManagerController {
  constructor(private menuService: InMemoryDBService<MenuEntity>) {
  }

  @Get()
  getAllMenu(): MenuEntity[] {
    return this.menuService.getAll();
  }

  @Post()
  @ApiOperation({})
  createMenu(@Body() menu: MenuEntity) {
    return this.menuService.create(menu);
  }

  @Put()
  updateMenu(@Body() menu: MenuEntity) {
    return this.menuService.update(menu);
  }

  @Delete(':id')
  deleteMenu(@Param('id') id: number) {
    return this.menuService.delete(+id)
  }

  @Get(':id')
  getMenuById(@Param('id') id: number): MenuEntity[] {
    return this.menuService.query(data => data.id === +id)
  }
}
