import { createAndModifyType } from '../basic.interface';
import { LogClass } from './log';
export declare class createdAndModified extends LogClass implements createAndModifyType {
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
}
