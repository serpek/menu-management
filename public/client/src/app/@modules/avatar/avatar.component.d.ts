import { OnInit } from '@angular/core';
import { ApiService, ContactEntity } from "../../@core/services/api.service";
export declare class AvatarComponent implements OnInit {
    private apiService;
    contacts: ContactEntity[];
    constructor(apiService: ApiService);
    ngOnInit(): Promise<void>;
}
