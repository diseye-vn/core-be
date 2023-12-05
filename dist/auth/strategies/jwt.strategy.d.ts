import { Cache } from 'cache-manager';
import { AuthService } from '../auth.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private cacheManager;
    private readonly UserServices;
    constructor(cacheManager: Cache, UserServices: AuthService);
    validate(payload: any): Promise<{
        id: any;
        token: any;
        name: any;
    }>;
}
export {};
