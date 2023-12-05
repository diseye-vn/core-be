import { createdAndModified } from 'src/type/entities/createModify';
export declare class User extends createdAndModified {
    _id: string;
    email: string;
    phone: string;
    password: string;
    token: string;
    roles: string[];
    lastLogin: Date;
}
