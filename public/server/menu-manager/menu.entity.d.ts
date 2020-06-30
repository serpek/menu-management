import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';
export declare class MenuEntity implements InMemoryDBEntity {
    id: number;
    title: string;
    module: string;
    icon: string;
}
