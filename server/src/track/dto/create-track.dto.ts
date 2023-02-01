import { IsString } from "class-validator";

export class CreateTrackDto {
  @IsString()
  name:string;
  @IsString()
  artist:string;
  @IsString()
  text:string;

}