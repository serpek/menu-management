import { ApiService } from "./api.service";
export declare class ConfigService {
    private apiService;
    constructor(apiService: ApiService);
    load(): Promise<boolean>;
}
