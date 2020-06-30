import { MenuEntity } from "../@core/services/api.service";
export declare class MenuItem implements MenuEntity {
    icon: string;
    id: number;
    module: string;
    title: string;
    selected: boolean;
    get text(): string;
    init(_data?: any): void;
    toJSON(data?: any): any;
}
