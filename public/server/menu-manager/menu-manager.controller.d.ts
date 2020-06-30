import { InMemoryDBService } from "@nestjs-addons/in-memory-db";
import { MenuEntity } from "./menu.entity";
export declare class MenuManagerController {
    private menuService;
    constructor(menuService: InMemoryDBService<MenuEntity>);
    getAllMenu(): MenuEntity[];
    seedMenu(): MenuEntity[];
    createMenu(menu: MenuEntity): MenuEntity;
    createManyMenu(menu: MenuEntity[]): Promise<MenuEntity[]>;
    updateMenu(menu: MenuEntity): Promise<boolean>;
    deleteMenu(id: number): Promise<boolean>;
    getMenuById(id: number): Promise<MenuEntity[]>;
}
