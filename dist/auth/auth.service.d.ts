import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { UtilsService } from 'src/utils/utils.service';
export declare const PRIVATE_ADDON_PASSWORD: string;
export declare class AuthService {
    private readonly jwtService;
    private readonly UserService;
    private readonly utils;
    constructor(jwtService: JwtService, UserService: UsersService, utils: UtilsService);
    vaildLogin(eop: string, password: string): Promise<{
        data: any;
        message: string;
    } | {
        data: any;
        message: any;
    }>;
    getUserFromToken(token: string): Promise<import("../users/entities/user.entity").User>;
    login(user: any): Promise<{
        statusCode: number;
        message: string;
        data: {
            access_token: string;
        };
    }>;
}
