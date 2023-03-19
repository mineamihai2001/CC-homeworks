import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { EmailService } from "./email.service";
import { ApiTags } from "@nestjs/swagger";
import { Response } from "express";

@ApiTags("email")
@Controller("email")
export class EmailController {
    constructor(private readonly emailService: EmailService) {}

    @Get()
    public async send(@Res() res: Response) {
        const success = await this.emailService.sendAll();
        return success
            ? res.status(HttpStatus.OK).send()
            : res.status(HttpStatus.BAD_GATEWAY).send();
    }
}
