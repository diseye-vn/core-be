"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageSchema = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const image_entity_1 = require("../entities/image.entity");
exports.ImageSchema = mongoose_1.SchemaFactory.createForClass(image_entity_1.Image);
//# sourceMappingURL=image.schema.js.map