"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const util_1 = require("util");
async function encrypt(data) {
    const password = () => {
        if (process.env.ENCRYPTION_PASSWORD == undefined)
            throw new common_1.BadRequestException('ENCRYPTION_KEY_NOT_INCLUDED');
        return process.env.ENCRYPTION_PASSWORD;
    };
    const iv = Buffer.from(password().slice(0, 16));
    const key = (await (0, util_1.promisify)(crypto_1.scrypt)(password(), 'salt', 32));
    const cipher = (0, crypto_1.createCipheriv)('aes-256-ctr', key, iv);
    const encryptedText = Buffer.concat([cipher.update(data), cipher.final()]);
    return encryptedText.toString('base64');
}
exports.encrypt = encrypt;
async function decrypt(data) {
    const password = () => {
        return process.env.ENCRYPTION_PASSWORD;
    };
    const iv = Buffer.from(password().slice(0, 16));
    const key = (await (0, util_1.promisify)(crypto_1.scrypt)(password(), 'salt', 32));
    const decipher = (0, crypto_1.createDecipheriv)('aes-256-ctr', key, iv);
    const decryptedText = Buffer.concat([
        decipher.update(Buffer.from(data, 'hex')),
        decipher.final(),
    ]);
    return decryptedText.toString('utf-8');
}
exports.decrypt = decrypt;
//# sourceMappingURL=encrypt.service.js.map