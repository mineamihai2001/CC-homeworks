import { Body, Controller, Get, HttpStatus, Post, Res } from "@nestjs/common";
import { EmailService } from "./email.service";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { SendEmailDto } from "./dto/send-email.dto";

@ApiTags("email")
@Controller("email")
export class EmailController {
    constructor(private readonly emailService: EmailService) {}

    @Post()
    @ApiBody({ type: SendEmailDto })
    public async send(@Body() dto: SendEmailDto, @Res() res: Response) {
        const success = await this.emailService.sendAll(dto.email);
        return success
            ? res.status(HttpStatus.OK).send()
            : res.status(HttpStatus.BAD_GATEWAY).send();
    }
}
