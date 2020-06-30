import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
export declare const API_BASE_URL: InjectionToken<string>;
export interface IApiService {
    getAllMenu(): Observable<MenuEntity[]>;
    createMenu(body: MenuEntity): Observable<MenuEntity>;
    updateMenu(body: MenuEntity): Observable<boolean>;
    seedMenu(): Observable<MenuEntity[]>;
    createManyMenu(body: MenuEntity[]): Observable<MenuEntity[]>;
    deleteMenu(id: number): Observable<boolean>;
    getMenuById(id: number): Observable<MenuEntity[]>;
    getContacts(): Observable<ContactEntity[]>;
    getContactById(id: number): Observable<ContactEntity>;
}
export declare class ApiService implements IApiService {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(http: HttpClient, baseUrl?: string);
    getAllMenu(): Observable<MenuEntity[]>;
    protected processGetAllMenu(response: HttpResponseBase): Observable<MenuEntity[]>;
    createMenu(body: MenuEntity): Observable<MenuEntity>;
    protected processCreateMenu(response: HttpResponseBase): Observable<MenuEntity>;
    updateMenu(body: MenuEntity): Observable<boolean>;
    protected processUpdateMenu(response: HttpResponseBase): Observable<boolean>;
    seedMenu(): Observable<MenuEntity[]>;
    protected processSeedMenu(response: HttpResponseBase): Observable<MenuEntity[]>;
    createManyMenu(body: MenuEntity[]): Observable<MenuEntity[]>;
    protected processCreateManyMenu(response: HttpResponseBase): Observable<MenuEntity[]>;
    deleteMenu(id: number): Observable<boolean>;
    protected processDeleteMenu(response: HttpResponseBase): Observable<boolean>;
    getMenuById(id: number): Observable<MenuEntity[]>;
    protected processGetMenuById(response: HttpResponseBase): Observable<MenuEntity[]>;
    getContacts(): Observable<ContactEntity[]>;
    protected processGetContacts(response: HttpResponseBase): Observable<ContactEntity[]>;
    getContactById(id: number): Observable<ContactEntity>;
    protected processGetContactById(response: HttpResponseBase): Observable<ContactEntity>;
}
export declare class MenuEntity implements IMenuEntity {
    id: number;
    title: string;
    module: string;
    icon: string;
    constructor(data?: IMenuEntity);
    init(_data?: any): void;
    static fromJS(data: any): MenuEntity;
    toJSON(data?: any): any;
}
export interface IMenuEntity {
    id: number;
    title: string;
    module: string;
    icon: string;
}
export declare class ContactEntity implements IContactEntity {
    id: number;
    createdAt: string;
    name: string;
    avatar: string;
    position: string;
    constructor(data?: IContactEntity);
    init(_data?: any): void;
    static fromJS(data: any): ContactEntity;
    toJSON(data?: any): any;
}
export interface IContactEntity {
    id: number;
    createdAt: string;
    name: string;
    avatar: string;
    position: string;
}
export declare class SwaggerException extends Error {
    message: string;
    status: number;
    response: string;
    headers: {
        [key: string]: any;
    };
    result: any;
    constructor(message: string, status: number, response: string, headers: {
        [key: string]: any;
    }, result: any);
    protected isSwaggerException: boolean;
    static isSwaggerException(obj: any): obj is SwaggerException;
}
