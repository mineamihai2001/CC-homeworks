import { ApiProperty } from "@nestjs/swagger";
import { Category, IFact } from "../types/IFact";
import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateFactDto implements IFact {
    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(Category)
    category: Category;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    question: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    answer: string;
}
