import { ApiProperty } from "@nestjs/swagger";
import { Category, IFact } from "../types/IFact";
import { IsEnum, IsString } from "class-validator";

export class UpdateFactDto implements IFact {
    @ApiProperty()
    @IsString()
    id: string;

    @ApiProperty()
    @IsEnum(Category)
    category: Category;

    @ApiProperty()
    @IsString()
    question: string;

    @ApiProperty()
    @IsString()
    answer: string;
}
