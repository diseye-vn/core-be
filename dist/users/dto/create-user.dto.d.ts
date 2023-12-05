import { User } from '../entities/user.entity';
export declare class CreateUserDto extends User {
    email: string;
    phone: string;
    password: string;
}
