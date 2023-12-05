/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { UtilsService } from 'src/utils/utils.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserDocument } from './schemas/user.schema';
export declare class UsersService {
    private readonly UserModel;
    private readonly utils;
    constructor(UserModel: Model<UserDocument>, utils: UtilsService);
    isUserExist(userInformation: User): Promise<boolean>;
    create(newUserBody: CreateUserDto): Promise<User>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, UserDocument> & User & Document & Required<{
        _id: string;
    }>)[]>;
    getById(id: string): Promise<User>;
    update(id: string, newUserInformation: UpdateUserDto): Promise<{
        statusCode: number;
        message: string;
    }>;
    getUserFromToken(token: string): Promise<User>;
    getByEOP(emailOrPhone: string): Promise<User>;
    updateUserToken(id: string, newToken: string): boolean | any;
}
