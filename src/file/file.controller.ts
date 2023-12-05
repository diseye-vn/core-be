import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Header,
  Get,
  Param,
  Res,
} from '@nestjs/common';
import { multerConfig } from './multer.config';
import { FileInterceptor } from '@nestjs/platform-express';
import { Multer } from 'multer';
import * as fs from 'fs';
@Controller('file')
export class FileController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('file', multerConfig))
  uploadFile(@UploadedFile() file: Multer.File): any {
    if (file) {
      return { statusCode: 200, messages: 'ok', data: file };
    } else {
      return { statusCode: 400, messages: 'error', data: null };
    }
  }

  // serve file in public folder
  @Get('view/:path')
  @Header('Content-Type', 'image/jpeg')
  serveImage(@Param('path') path, @Res() res): any {
    fs.readFile(`./public/file/${path}`, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        return res.end('404 Not Found');
      }
      res.writeHead(200, { 'Content-Type': 'image/jpeg' });
      res.write(data);
      return res.end();
    });
  }

}
