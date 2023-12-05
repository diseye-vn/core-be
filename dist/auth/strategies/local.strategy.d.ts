import { AuthService } from 'src/auth/auth.service';
declare const LocalStrategy_base: new (...args: any[]) => any;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(eop: string, password: string): Promise<any>;
}
export {};