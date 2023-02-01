import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from "@nestjs/mongoose";
import { FileModule } from './file/file.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from "path";

@Module({
  imports: [
    TrackModule,
    MongooseModule.forRoot('mongodb+srv://manhattan:rootroot@spotify.j3q4dhx.mongodb.net/?retryWrites=true&w=majority'),
    FileModule,
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname,'..','client'),
    }),
  ]
})
export class AppModule {}
