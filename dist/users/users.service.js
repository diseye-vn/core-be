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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const validator_1 = require("validator");
const js_sha512_1 = require("js-sha512");
const mongoose_2 = require("mongoose");
const utils_service_1 = require("../utils/utils.service");
const PRIVATE_ADDON_PASSWORD = process.env.EXTRA_PASSWORD_STRING;
let UsersService = class UsersService {
    constructor(UserModel, utils) {
        this.UserModel = UserModel;
        this.utils = utils;
    }
    async isUserExist(userInformation) {
        const userInformationByPhone = await this.getByEOP(userInformation.phone);
        const userInformationByEmail = await this.getByEOP(userInformation.email);
        return userInformationByEmail !== null || userInformationByPhone !== null;
    }
    async create(newUserBody) {
        newUserBody.password = (0, js_sha512_1.sha512)(newUserBody.password + PRIVATE_ADDON_PASSWORD);
        if (await this.isUserExist(newUserBody)) {
            throw new common_1.BadRequestException('USER_EXIST');
        }
        const newUser = await new this.UserModel(newUserBody);
        return this.utils.returnSafeUser(await newUser.save());
    }
    async findAll() {
        return (await this.UserModel.find({}).exec()).filter((user) => this.utils.returnSafeUser(user));
    }
    async getById(id) {
        return this.UserModel.findOne({ _id: id }).exec();
    }
    async update(id, newUserInformation) {
        const resultUserUpdate = await this.UserModel.updateOne({ _id: id }, newUserInformation).exec();
        if (resultUserUpdate.matchedCount == 0) {
            throw new common_1.NotFoundException('');
        }
        else {
            if (resultUserUpdate.modifiedCount == 0) {
                throw new common_1.BadRequestException('NOT_THING_CHANGED');
            }
            else {
                return {
                    statusCode: 200,
                    message: 'UPDATED',
                };
            }
        }
    }
    async getUserFromToken(token) {
        return this.UserModel.findOne({ token: token }).exec();
    }
    async getByEOP(emailOrPhone) {
        let userInformation;
        if (validator_1.default.isEmail(emailOrPhone)) {
            userInformation = this.UserModel.findOne({ email: emailOrPhone }).exec();
        }
        else {
            userInformation = this.UserModel.findOne({ phone: emailOrPhone }).exec();
        }
        return userInformation;
    }
    updateUserToken(id, newToken) {
        const updateUserResult = this.UserModel.updateOne({ _id: id }, { token: newToken, lastLogin: new Date().toISOString() }).exec();
        return {
            statusCode: 200,
            data: updateUserResult,
        };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('users')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        utils_service_1.UtilsService])
], UsersService);
//# sourceMappingURL=users.service.js.map