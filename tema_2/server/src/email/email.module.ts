import { Module } from "@nestjs/common";
import { EmailService } from "./email.service";
import { EmailController } from "./email.controller";
import { MailerModule } from "@nestjs-modules/mailer";
import { EjsAdapter } from "@nestjs-modules/mailer/dist/adapters/ejs.adapter";
import { WeatherModule } from "src/weather/weather.module";
import { FactsModule } from "src/facts/facts.module";

@Module({
    imports: [
        MailerModule.forRoot({
            transport: {
                host: "smtp.ethereal.email",
                port: 587,
                auth: {
                    user: "garrick.feest@ethereal.email",
                    pass: "7mFt2TU45TctaykN1U",
                },
            },
            defaults: {
                from: '"nest-modules" <modules@nestjs.com>',
            },
            template: {
                dir: process.cwd() + "/src/email/templates",
                adapter: new EjsAdapter(),
                options: {
                    strict: false,
                },
            },
        }),
        WeatherModule,
        FactsModule,
    ],
    controllers: [EmailController],
    providers: [EmailService],
})
export class EmailModule {}
