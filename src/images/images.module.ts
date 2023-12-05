import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ImageSchema } from './schemas/image.schema';
import { UtilsService } from 'src/utils/utils.service';

@Module({
  imports: [

    MongooseModule.forFeature([
      { name: 'images', schema: ImageSchema, collection: 'images' },
    ]),
  ],
  controllers: [ImagesController],
  providers: [UtilsService, ImagesService],
})
export class ImagesModule {}
