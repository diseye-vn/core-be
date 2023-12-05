"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerConfig = void 0;
const multer_1 = require("multer");
const utils_service_1 = require("../utils/utils.service");
const utils = new utils_service_1.UtilsService();
exports.multerConfig = {
    storage: (0, multer_1.diskStorage)({
        destination: './public/file',
        filename: (req, file, cb) => {
            const fileName = utils
                .removeVietnameseTones(file.originalname.split('.')[0])
                .toUpperCase()
                .toLowerCase()
                .replace(/\s+/g, '-');
            cb(null, `${utils.randomToken(4)}--${fileName}.` +
                file.originalname.split('.')[1]);
        },
    }),
};
//# sourceMappingURL=multer.config.js.map