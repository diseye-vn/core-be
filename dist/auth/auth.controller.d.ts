import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { UtilsService } from 'src/utils/utils.service';
export declare class AuthController {
    private readonly authService;
    private readonly usersService;
    private readonly utils;
    constructor(authService: AuthService, usersService: UsersService, utils: UtilsService);
    login(req: any): Promise<{
        statusCode: number;
        message: string;
        data: {
            access_token: string;
        };
    }>;
    info(req: any): Promise<import("../users/entities/user.entity").User>;
}
