import { Prop, Schema } from '@nestjs/mongoose';
import { IsEmail, IsEnum, IsPhoneNumber } from 'class-validator';
import { createdAndModified } from 'src/type/entities/createModify';
import { Status } from 'src/type/enum/status';
import { v4 as uuidv4 } from 'uuid';

@Schema()
export class Image extends createdAndModified {
  @Prop({ required: true, default: () => uuidv4() })
  _id: string;

    @Prop({ required: true })
  image: string;

  @Prop({ required: true, enum: Status, default: Status.NEW})
  @IsEnum(Status)
  status: Status

  @Prop({required: true, default: "-"})
  result: string;
}
