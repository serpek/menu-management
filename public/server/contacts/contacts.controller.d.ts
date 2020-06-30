import { HttpService } from '@nestjs/common';
import { ContactEntity } from "./contact.entity";
export declare class ContactsController {
    private httpService;
    constructor(httpService: HttpService);
    getContacts(): Promise<ContactEntity[]>;
    getContactById(id: number): Promise<ContactEntity>;
}
