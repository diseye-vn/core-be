import { LogType } from '../basic.interface';
export declare class LogClass implements LogType {
    _id: string;
    createdAt: Date;
    createdBy: string;
    content?: string;
    type: string;
    constructor(content?: string, type?: string);
}
