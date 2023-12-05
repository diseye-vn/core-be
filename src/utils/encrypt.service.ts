import { BadRequestException } from '@nestjs/common';
import { createCipheriv, createDecipheriv, scrypt } from 'crypto';
import { promisify } from 'util';

export async function encrypt(data: string) {
  const password = () => {
    if (process.env.ENCRYPTION_PASSWORD == undefined)
      throw new BadRequestException('ENCRYPTION_KEY_NOT_INCLUDED');
    return process.env.ENCRYPTION_PASSWORD;
  };
  const iv = Buffer.from(password().slice(0, 16));

  const key = (await promisify(scrypt)(password(), 'salt', 32)) as Buffer;

  const cipher = createCipheriv('aes-256-ctr', key, iv);

  const encryptedText = Buffer.concat([cipher.update(data), cipher.final()]);
  return encryptedText.toString('base64');
}

export async function decrypt(data: any) {
  const password = () => {
    return process.env.ENCRYPTION_PASSWORD;
  };
  const iv = Buffer.from(password().slice(0, 16));

  const key = (await promisify(scrypt)(password(), 'salt', 32)) as Buffer;

  const decipher = createDecipheriv('aes-256-ctr', key, iv);
  const decryptedText = Buffer.concat([
    decipher.update(Buffer.from(data, 'hex')),
    decipher.final(),
  ]);
  return decryptedText.toString('utf-8');
}
