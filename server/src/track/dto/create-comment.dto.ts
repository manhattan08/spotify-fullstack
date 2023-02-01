import { Types } from "mongoose";
import { IsString } from "class-validator";
import { IsObjectId } from "class-validator-mongo-object-id";

export class CreateCommentDto {
  @IsString()
  username:string;
  @IsString()
  text:string;
  @IsObjectId()
  trackId:Types.ObjectId
}