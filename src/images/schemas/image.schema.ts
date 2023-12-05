import { SchemaFactory } from '@nestjs/mongoose';
import { Image } from '../entities/image.entity';

export type ImageDocument = Image & Document;

export const ImageSchema = SchemaFactory.createForClass(Image);
