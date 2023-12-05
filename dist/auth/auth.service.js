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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = exports.PRIVATE_ADDON_PASSWORD = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const js_sha512_1 = require("js-sha512");
const users_service_1 = require("../users/users.service");
const utils_service_1 = require("../utils/utils.service");
exports.PRIVATE_ADDON_PASSWORD = process.env.EXTRA_PASSWORD_STRING;
let AuthService = class AuthService {
    constructor(jwtService, UserService, utils) {
        this.jwtService = jwtService;
        this.UserService = UserService;
        this.utils = utils;
    }
    async vaildLogin(eop, password) {
        let user = await this.UserService.getByEOP(eop);
        let message;
        if (user && user.password === (0, js_sha512_1.sha512)(password + exports.PRIVATE_ADDON_PASSWORD)) {
            const newToken = this.utils.randomToken();
            await this.UserService.updateUserToken(user._id, newToken);
            user = await this.UserService.getById(user._id);
            const result = __rest(user, []);
            result['_doc'].token = newToken;
            return { data: result['_doc'], message: 'LOGIN_SUCCESS' };
        }
        else {
            message = 'LOGIN_FAILED_INVALID_CREDENTIALS';
        }
        return { data: null, message: message };
    }
    getUserFromToken(token) {
        return this.UserService.getUserFromToken(token);
    }
    async login(user) {
        const payload_user = user;
        const payload = {
            id: payload_user._id,
            business_id: payload_user.business_id,
            token: payload_user.token,
            name: payload_user.name,
        };
        return {
            statusCode: 200,
            message: 'LOGIN_SUCCESS',
            data: {
                access_token: this.jwtService.sign(payload),
            },
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        users_service_1.UsersService,
        utils_service_1.UtilsService])
], AuthService);
//# sourceMappingURL=auth.service.js.map