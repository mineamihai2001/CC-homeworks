import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsNumber, IsOptional } from "class-validator";
import { Units } from "../types/units.enum";

export class CurrentWeatherDto {
    @ApiProperty()
    @IsNotEmpty()
    latitude: number;

    @ApiProperty()
    @IsNotEmpty()
    longitude: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsEnum(Units)
    units?: Units;
}
