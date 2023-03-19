import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString } from "class-validator";

export class SendEmailDto {
    @ApiProperty()
    @IsString()
    email: string;

    @ApiProperty()
    @IsBoolean()
    weather: boolean;

    @ApiProperty()
    @IsBoolean()
    facts: boolean;
}
