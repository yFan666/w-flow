import {
  IsArray,
  IsDateString,
  IsOptional,
  IsString,
  Length,
  ArrayMaxSize,
} from 'class-validator';

export class CreatePostDto {
  @IsString()
  @Length(1, 120)
  slug: string;

  @IsString()
  @Length(1, 200)
  title: string;

  @IsDateString()
  date: string;

  @IsString()
  @Length(1, 300)
  excerpt: string;

  @IsArray()
  @ArrayMaxSize(10)
  @IsString({ each: true })
  tags: string[];

  @IsOptional()
  @IsString()
  @Length(0, 500)
  cover?: string;

  @IsString()
  contentMd: string;
}
