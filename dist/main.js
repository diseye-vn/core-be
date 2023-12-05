"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setup = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const app_info_1 = require("./app.info");
const fs = require("fs");
const crypto = require("crypto");
const path = require("path");
const privateKeyPath = './private_key/key_for_jwt';
function generateRSAKey() {
    const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 4096,
        publicKeyEncoding: {
            type: 'pkcs1',
            format: 'pem',
        },
        privateKeyEncoding: {
            type: 'pkcs1',
            format: 'pem',
        },
    });
    return { privateKey, publicKey };
}
const setup = () => {
    fs.mkdirSync(path.dirname(privateKeyPath), { recursive: true });
    if (fs.existsSync(privateKeyPath)) {
        console.log(`Private key exists at ${privateKeyPath}`);
    }
    else {
        console.log(`Private key does not exist. Generating...`);
        const { privateKey } = generateRSAKey();
        fs.mkdirSync(path.dirname(privateKeyPath), { recursive: true });
        fs.writeFileSync(privateKeyPath, privateKey, 'utf-8');
        console.log(`Private key generated and saved to ${privateKeyPath}`);
    }
};
exports.setup = setup;
(0, exports.setup)();
async function bootstrap() {
    console.log(`Starting ${app_info_1.AppInfo.name} Services....`);
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors();
    await app.listen(process.env.PORT || 3001);
}
bootstrap();
//# sourceMappingURL=main.js.map