"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const user_entity_1 = require("../entities/user.entity");
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(user_entity_1.User);
//# sourceMappingURL=user.schema.js.map