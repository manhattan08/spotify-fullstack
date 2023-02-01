import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema, Types } from "mongoose";
import { Track } from "./track.schema";

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
  @Prop()
  username: string;

  @Prop()
  text: string;

  @Prop({type:MongooseSchema.Types.ObjectId,ref:"Track"})
  track:Track;

}

export const CommentSchema = SchemaFactory.createForClass(Comment);