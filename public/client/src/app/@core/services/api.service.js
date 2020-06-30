"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const operators_1 = require("rxjs/operators");
const rxjs_1 = require("rxjs");
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
exports.API_BASE_URL = new core_1.InjectionToken('API_BASE_URL');
let ApiService = class ApiService {
    constructor(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    getAllMenu() {
        let url_ = this.baseUrl + "/v1/menu";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new http_1.HttpHeaders({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(operators_1.mergeMap((response_) => {
            return this.processGetAllMenu(response_);
        })).pipe(operators_1.catchError((response_) => {
            if (response_ instanceof http_1.HttpResponseBase) {
                try {
                    return this.processGetAllMenu(response_);
                }
                catch (e) {
                    return rxjs_1.throwError(e);
                }
            }
            else
                return rxjs_1.throwError(response_);
        }));
    }
    processGetAllMenu(response) {
        const status = response.status;
        const responseBlob = response instanceof http_1.HttpResponse ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(MenuEntity.fromJS(item));
                }
                return rxjs_1.of(result200);
            }));
        }
        else if (status === 400) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("Bad request.", status, _responseText, _headers);
            }));
        }
        else if (status === 403) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("Forbidden.", status, _responseText, _headers);
            }));
        }
        else if (status === 500) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("Server error.", status, _responseText, _headers);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return rxjs_1.of(null);
    }
    createMenu(body) {
        let url_ = this.baseUrl + "/v1/menu";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new http_1.HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("post", url_, options_).pipe(operators_1.mergeMap((response_) => {
            return this.processCreateMenu(response_);
        })).pipe(operators_1.catchError((response_) => {
            if (response_ instanceof http_1.HttpResponseBase) {
                try {
                    return this.processCreateMenu(response_);
                }
                catch (e) {
                    return rxjs_1.throwError(e);
                }
            }
            else
                return rxjs_1.throwError(response_);
        }));
    }
    processCreateMenu(response) {
        const status = response.status;
        const responseBlob = response instanceof http_1.HttpResponse ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 201) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                let result201 = null;
                let resultData201 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result201 = MenuEntity.fromJS(resultData201);
                return rxjs_1.of(result201);
            }));
        }
        else if (status === 400) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("Bad request.", status, _responseText, _headers);
            }));
        }
        else if (status === 403) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("Forbidden.", status, _responseText, _headers);
            }));
        }
        else if (status === 500) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("Server error.", status, _responseText, _headers);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return rxjs_1.of(null);
    }
    updateMenu(body) {
        let url_ = this.baseUrl + "/v1/menu";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new http_1.HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("put", url_, options_).pipe(operators_1.mergeMap((response_) => {
            return this.processUpdateMenu(response_);
        })).pipe(operators_1.catchError((response_) => {
            if (response_ instanceof http_1.HttpResponseBase) {
                try {
                    return this.processUpdateMenu(response_);
                }
                catch (e) {
                    return rxjs_1.throwError(e);
                }
            }
            else
                return rxjs_1.throwError(response_);
        }));
    }
    processUpdateMenu(response) {
        const status = response.status;
        const responseBlob = response instanceof http_1.HttpResponse ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return rxjs_1.of(result200);
            }));
        }
        else if (status === 400) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("Bad request.", status, _responseText, _headers);
            }));
        }
        else if (status === 403) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("Forbidden.", status, _responseText, _headers);
            }));
        }
        else if (status === 500) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("Server error.", status, _responseText, _headers);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return rxjs_1.of(null);
    }
    seedMenu() {
        let url_ = this.baseUrl + "/v1/menu/seed";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new http_1.HttpHeaders({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(operators_1.mergeMap((response_) => {
            return this.processSeedMenu(response_);
        })).pipe(operators_1.catchError((response_) => {
            if (response_ instanceof http_1.HttpResponseBase) {
                try {
                    return this.processSeedMenu(response_);
                }
                catch (e) {
                    return rxjs_1.throwError(e);
                }
            }
            else
                return rxjs_1.throwError(response_);
        }));
    }
    processSeedMenu(response) {
        const status = response.status;
        const responseBlob = response instanceof http_1.HttpResponse ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(MenuEntity.fromJS(item));
                }
                return rxjs_1.of(result200);
            }));
        }
        else if (status === 400) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("Bad request.", status, _responseText, _headers);
            }));
        }
        else if (status === 403) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("Forbidden.", status, _responseText, _headers);
            }));
        }
        else if (status === 500) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("Server error.", status, _responseText, _headers);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return rxjs_1.of(null);
    }
    createManyMenu(body) {
        let url_ = this.baseUrl + "/v1/menu/many";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new http_1.HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("post", url_, options_).pipe(operators_1.mergeMap((response_) => {
            return this.processCreateManyMenu(response_);
        })).pipe(operators_1.catchError((response_) => {
            if (response_ instanceof http_1.HttpResponseBase) {
                try {
                    return this.processCreateManyMenu(response_);
                }
                catch (e) {
                    return rxjs_1.throwError(e);
                }
            }
            else
                return rxjs_1.throwError(response_);
        }));
    }
    processCreateManyMenu(response) {
        const status = response.status;
        const responseBlob = response instanceof http_1.HttpResponse ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 201) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                let result201 = null;
                let resultData201 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (Array.isArray(resultData201)) {
                    result201 = [];
                    for (let item of resultData201)
                        result201.push(MenuEntity.fromJS(item));
                }
                return rxjs_1.of(result201);
            }));
        }
        else if (status === 400) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("Bad request.", status, _responseText, _headers);
            }));
        }
        else if (status === 403) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("Forbidden.", status, _responseText, _headers);
            }));
        }
        else if (status === 500) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("Server error.", status, _responseText, _headers);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return rxjs_1.of(null);
    }
    deleteMenu(id) {
        let url_ = this.baseUrl + "/v1/menu/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new http_1.HttpHeaders({
                "Accept": "application/json"
            })
        };
        return this.http.request("delete", url_, options_).pipe(operators_1.mergeMap((response_) => {
            return this.processDeleteMenu(response_);
        })).pipe(operators_1.catchError((response_) => {
            if (response_ instanceof http_1.HttpResponseBase) {
                try {
                    return this.processDeleteMenu(response_);
                }
                catch (e) {
                    return rxjs_1.throwError(e);
                }
            }
            else
                return rxjs_1.throwError(response_);
        }));
    }
    processDeleteMenu(response) {
        const status = response.status;
        const responseBlob = response instanceof http_1.HttpResponse ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return rxjs_1.of(result200);
            }));
        }
        else if (status === 400) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("Bad request.", status, _responseText, _headers);
            }));
        }
        else if (status === 403) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("Forbidden.", status, _responseText, _headers);
            }));
        }
        else if (status === 500) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("Server error.", status, _responseText, _headers);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return rxjs_1.of(null);
    }
    getMenuById(id) {
        let url_ = this.baseUrl + "/v1/menu/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new http_1.HttpHeaders({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(operators_1.mergeMap((response_) => {
            return this.processGetMenuById(response_);
        })).pipe(operators_1.catchError((response_) => {
            if (response_ instanceof http_1.HttpResponseBase) {
                try {
                    return this.processGetMenuById(response_);
                }
                catch (e) {
                    return rxjs_1.throwError(e);
                }
            }
            else
                return rxjs_1.throwError(response_);
        }));
    }
    processGetMenuById(response) {
        const status = response.status;
        const responseBlob = response instanceof http_1.HttpResponse ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(MenuEntity.fromJS(item));
                }
                return rxjs_1.of(result200);
            }));
        }
        else if (status === 400) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("Bad request.", status, _responseText, _headers);
            }));
        }
        else if (status === 403) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("Forbidden.", status, _responseText, _headers);
            }));
        }
        else if (status === 500) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("Server error.", status, _responseText, _headers);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return rxjs_1.of(null);
    }
    getContacts() {
        let url_ = this.baseUrl + "/v1/contacts";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new http_1.HttpHeaders({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(operators_1.mergeMap((response_) => {
            return this.processGetContacts(response_);
        })).pipe(operators_1.catchError((response_) => {
            if (response_ instanceof http_1.HttpResponseBase) {
                try {
                    return this.processGetContacts(response_);
                }
                catch (e) {
                    return rxjs_1.throwError(e);
                }
            }
            else
                return rxjs_1.throwError(response_);
        }));
    }
    processGetContacts(response) {
        const status = response.status;
        const responseBlob = response instanceof http_1.HttpResponse ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(ContactEntity.fromJS(item));
                }
                return rxjs_1.of(result200);
            }));
        }
        else if (status === 400) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("Bad request.", status, _responseText, _headers);
            }));
        }
        else if (status === 403) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("Forbidden.", status, _responseText, _headers);
            }));
        }
        else if (status === 500) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("Server error.", status, _responseText, _headers);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return rxjs_1.of(null);
    }
    getContactById(id) {
        let url_ = this.baseUrl + "/v1/contacts/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new http_1.HttpHeaders({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(operators_1.mergeMap((response_) => {
            return this.processGetContactById(response_);
        })).pipe(operators_1.catchError((response_) => {
            if (response_ instanceof http_1.HttpResponseBase) {
                try {
                    return this.processGetContactById(response_);
                }
                catch (e) {
                    return rxjs_1.throwError(e);
                }
            }
            else
                return rxjs_1.throwError(response_);
        }));
    }
    processGetContactById(response) {
        const status = response.status;
        const responseBlob = response instanceof http_1.HttpResponse ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = ContactEntity.fromJS(resultData200);
                return rxjs_1.of(result200);
            }));
        }
        else if (status === 400) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("Bad request.", status, _responseText, _headers);
            }));
        }
        else if (status === 403) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("Forbidden.", status, _responseText, _headers);
            }));
        }
        else if (status === 500) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("Server error.", status, _responseText, _headers);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(operators_1.mergeMap(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return rxjs_1.of(null);
    }
};
ApiService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __param(0, core_1.Inject(http_1.HttpClient)), __param(1, core_1.Optional()), __param(1, core_1.Inject(exports.API_BASE_URL)),
    __metadata("design:paramtypes", [http_1.HttpClient, String])
], ApiService);
exports.ApiService = ApiService;
class MenuEntity {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.id = _data["id"];
            this.title = _data["title"];
            this.module = _data["module"];
            this.icon = _data["icon"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new MenuEntity();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["title"] = this.title;
        data["module"] = this.module;
        data["icon"] = this.icon;
        return data;
    }
}
exports.MenuEntity = MenuEntity;
class ContactEntity {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.id = _data["id"];
            this.createdAt = _data["createdAt"];
            this.name = _data["name"];
            this.avatar = _data["avatar"];
            this.position = _data["position"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new ContactEntity();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["createdAt"] = this.createdAt;
        data["name"] = this.name;
        data["avatar"] = this.avatar;
        data["position"] = this.position;
        return data;
    }
}
exports.ContactEntity = ContactEntity;
class SwaggerException extends Error {
    constructor(message, status, response, headers, result) {
        super();
        this.isSwaggerException = true;
        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }
    static isSwaggerException(obj) {
        return obj.isSwaggerException === true;
    }
}
exports.SwaggerException = SwaggerException;
function throwException(message, status, response, headers, result) {
    if (result !== null && result !== undefined)
        return rxjs_1.throwError(result);
    else
        return rxjs_1.throwError(new SwaggerException(message, status, response, headers, null));
}
function blobToText(blob) {
    return new rxjs_1.Observable((observer) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        }
        else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next(event.target.result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}
//# sourceMappingURL=api.service.js.map