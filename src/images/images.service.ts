import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ImageDocument } from './schemas/image.schema';
import { UtilsService } from 'src/utils/utils.service';
import { Status } from 'src/type/enum/status';

@Injectable()
export class ImagesService {
  constructor(
    @InjectModel('images') private readonly ImageModel: Model<ImageDocument>,
    private readonly utils: UtilsService){}
  create(createImageDto: CreateImageDto) {
    const newImage = new this.ImageModel(createImageDto);
    return newImage.save()
  }

  findAll() {
    return this.ImageModel.find().exec();
  }

  async pop() {
    const pop = await this.ImageModel.findOne({status: Status.NEW}).exec();
    if (!pop) {
      return {
        message: 'No image to process',
        data: null
      };

      
    }
    await this.ImageModel.updateOne({_id: pop._id}, {status: Status.PROCESSING}).exec();
    return {
      message: 'Image found',
      data: pop
    };
  }

  findOne(id: string) {
    return this.ImageModel.findById(id).exec();
  }

  update(id: string, updateImageDto: UpdateImageDto) {
    return this.ImageModel.updateOne({ _id: id }, updateImageDto).exec();
  }

  remove(id: string) {
    return this.ImageModel.deleteOne({ _id: id }).exec();
  }
}
