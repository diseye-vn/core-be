"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilsService = exports.UNSAFE_ENTITIES_USER = exports.PUBLIC_KEY = exports.PRIVATE_KEY = exports.getPublicKey = exports.getPrivateKey = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const js_sha512_1 = require("js-sha512");
const uuid_1 = require("uuid");
const NodeRSA = require("node-rsa");
const KEY_DIR = `${process.cwd()}/private_key`;
function getPrivateKey() {
    const privateKey = NodeRSA(fs.readFileSync(`${KEY_DIR}/key_for_jwt`));
    return privateKey.exportKey('private');
}
exports.getPrivateKey = getPrivateKey;
function getPublicKey() {
    const privateKey = NodeRSA(fs.readFileSync(`${KEY_DIR}/key_for_jwt`));
    return privateKey.exportKey('public');
}
exports.getPublicKey = getPublicKey;
const PRIVATE_KEY = () => {
    const PRIVATE_KEY_FUNCTION = NodeRSA(fs.readFileSync(`${KEY_DIR}/key_for_jwt`));
    return PRIVATE_KEY_FUNCTION.exportKey('private');
};
exports.PRIVATE_KEY = PRIVATE_KEY;
const PUBLIC_KEY = () => {
    const PRIVATE_KEY_FUNCTION = NodeRSA(fs.readFileSync(`${KEY_DIR}/key_for_jwt`));
    return PRIVATE_KEY_FUNCTION.exportKey('public');
};
exports.PUBLIC_KEY = PUBLIC_KEY;
exports.UNSAFE_ENTITIES_USER = ['token', 'password'];
let UtilsService = class UtilsService {
    removeVietnameseTones(str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ê|ễ/g, 'e');
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
        str = str.replace(/đ/g, 'd');
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
        str = str.replace(/Đ/g, 'D');
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '');
        str = str.replace(/\u02C6|\u0306|\u031B/g, '');
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '');
        str = str.replace(/\u02C6|\u0306|\u031B/g, '');
        str = str.replace(/ + /g, ' ');
        str = str.trim();
        str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, ' ');
        return str;
    }
    randomToken(length = 10) {
        const randomUUID = (0, uuid_1.v4)();
        return (0, js_sha512_1.sha512)((0, js_sha512_1.sha512)(randomUUID + randomUUID + randomUUID).substring(0, length * 3)).substring(0, 10);
    }
    async returnSafeUser(user) {
        exports.UNSAFE_ENTITIES_USER.forEach((entities) => {
            user[entities] = undefined;
            delete user[entities];
        });
        return user;
    }
};
exports.UtilsService = UtilsService;
exports.UtilsService = UtilsService = __decorate([
    (0, common_1.Injectable)()
], UtilsService);
//# sourceMappingURL=utils.service.js.map