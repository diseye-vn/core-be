import { createdAndModified } from 'src/type/entities/createModify';
import { Status } from 'src/type/enum/status';
export declare class Image extends createdAndModified {
    _id: string;
    image: string;
    status: Status;
    result: string;
}
