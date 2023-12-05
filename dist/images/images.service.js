"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const utils_service_1 = require("../utils/utils.service");
const status_1 = require("../type/enum/status");
let ImagesService = class ImagesService {
    constructor(ImageModel, utils) {
        this.ImageModel = ImageModel;
        this.utils = utils;
    }
    create(createImageDto) {
        const newImage = new this.ImageModel(createImageDto);
        return newImage.save();
    }
    findAll() {
        return this.ImageModel.find().exec();
    }
    async pop() {
        const pop = await this.ImageModel.findOne({ status: status_1.Status.NEW }).exec();
        if (!pop) {
            return {
                message: 'No image to process',
                data: null
            };
        }
        await this.ImageModel.updateOne({ _id: pop._id }, { status: status_1.Status.PROCESSING }).exec();
        return {
            message: 'Image found',
            data: pop
        };
    }
    findOne(id) {
        return this.ImageModel.findById(id).exec();
    }
    update(id, updateImageDto) {
        return this.ImageModel.updateOne({ _id: id }, updateImageDto).exec();
    }
    remove(id) {
        return this.ImageModel.deleteOne({ _id: id }).exec();
    }
};
exports.ImagesService = ImagesService;
exports.ImagesService = ImagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('images')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        utils_service_1.UtilsService])
], ImagesService);
//# sourceMappingURL=images.service.js.map