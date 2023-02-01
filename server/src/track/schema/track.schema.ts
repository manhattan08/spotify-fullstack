import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema, Types } from "mongoose";
import { Comment } from "./comment.schema";

export type TrackDocument = Track & Document;

@Schema()
export class Track {
  @Prop()
  name: string;

  @Prop()
  artist: string;

  @Prop()
  text: string;

  @Prop()
  picture: string;

  @Prop()
  listens: number;

  @Prop()
  audio: string;

  @Prop({type:[{type:MongooseSchema.Types.ObjectId,ref:"Comment"}]})
  comments:Types.ObjectId[]
}

export const TrackSchema = SchemaFactory.createForClass(Track);