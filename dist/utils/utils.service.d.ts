import { User } from 'src/users/entities/user.entity';
export declare function getPrivateKey(): string;
export declare function getPublicKey(): string;
export declare const PRIVATE_KEY: () => any;
export declare const PUBLIC_KEY: () => any;
export declare const UNSAFE_ENTITIES_USER: string[];
export declare class UtilsService {
    removeVietnameseTones(str: any): any;
    randomToken(length?: number): string;
    returnSafeUser(user: User): Promise<User>;
}
