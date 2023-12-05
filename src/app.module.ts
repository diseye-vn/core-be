import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import * as path from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { APP_FILTER } from '@nestjs/core';
import { UtilsService } from './utils/utils.service';
import { ImagesModule } from './images/images.module';
import { FileModule } from './file/file.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    CacheModule.register(),
    UsersModule,
    AuthModule,
    ImagesModule,
    FileModule,
  ],
  controllers: [AppController],
  providers: [AppService, UtilsService],
})
export class AppModule {}
