import { Multer } from 'multer';
export declare class FileController {
    uploadFile(file: Multer.File): any;
    serveImage(path: any, res: any): any;
}
