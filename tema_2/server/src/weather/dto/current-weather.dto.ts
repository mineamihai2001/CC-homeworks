import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsOptional } from "class-validator";
import { Units } from "../types/units.enum";

export class CurrentWeatherDto {
    @ApiProperty()
    @IsNumber()
    latitude: number;

    @ApiProperty()
    @IsNumber()
    longitude: number;

    @ApiPropertyOptional()
    @IsEnum(Units)
    units?: Units;
}
