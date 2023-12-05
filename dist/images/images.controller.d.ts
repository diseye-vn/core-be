/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
export declare class ImagesController {
    private readonly imagesService;
    constructor(imagesService: ImagesService);
    create(createImageDto: CreateImageDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/image.schema").ImageDocument> & import("./entities/image.entity").Image & Document & Required<{
        _id: string;
    }>>;
    popout(): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./schemas/image.schema").ImageDocument> & import("./entities/image.entity").Image & Document & Required<{
            _id: string;
        }>;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/image.schema").ImageDocument> & import("./entities/image.entity").Image & Document & Required<{
        _id: string;
    }>)[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/image.schema").ImageDocument> & import("./entities/image.entity").Image & Document & Required<{
        _id: string;
    }>>;
    update(id: string, updateImageDto: UpdateImageDto): Promise<import("mongoose").UpdateWriteOpResult>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
