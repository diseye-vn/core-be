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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const class_validator_1 = require("class-validator");
const createModify_1 = require("../../type/entities/createModify");
const status_1 = require("../../type/enum/status");
const uuid_1 = require("uuid");
let Image = class Image extends createModify_1.createdAndModified {
};
exports.Image = Image;
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: () => (0, uuid_1.v4)() }),
    __metadata("design:type", String)
], Image.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Image.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: status_1.Status, default: status_1.Status.NEW }),
    (0, class_validator_1.IsEnum)(status_1.Status),
    __metadata("design:type", String)
], Image.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: "-" }),
    __metadata("design:type", String)
], Image.prototype, "result", void 0);
exports.Image = Image = __decorate([
    (0, mongoose_1.Schema)()
], Image);
//# sourceMappingURL=image.entity.js.map