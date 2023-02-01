import { Module } from '@nestjs/common';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';
import { MongooseModule } from "@nestjs/mongoose";
import { Track, TrackSchema } from "./schema/track.schema";
import { Comment, CommentSchema } from "./schema/comment.schema";
import { FileModule } from "../file/file.module";

@Module({
  imports:[
    MongooseModule.forFeature([{name:Track.name,schema:TrackSchema}]),
    MongooseModule.forFeature([{name:Comment.name,schema:CommentSchema}]),
    FileModule
  ],
  controllers: [TrackController],
  providers: [TrackService]
})
export class TrackModule {}
