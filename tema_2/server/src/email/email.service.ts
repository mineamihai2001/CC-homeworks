import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { FactsService } from "src/facts/facts.service";
import { IFact } from "src/facts/types/IFact";
import { IWeather } from "src/weather/types/IWeather";
import { WeatherService } from "src/weather/weather.service";

@Injectable()
export class EmailService {
    constructor(
        private readonly mailerService: MailerService,
        private readonly factsService: FactsService,
        private readonly weatherService: WeatherService
    ) {}

    public async sendAll(email: string): Promise<boolean> {
        const weather = await this.getWeather();
        const fact = await this.getRandomFact();

        return this.sendMail(email, { weather, fact });
    }

    public async sendWeather(email: string): Promise<boolean> {
        const weather = await this.getWeather();
        return this.sendMail(email, { weather });
    }

    public async sendFact(email: string): Promise<boolean> {
        const fact = await this.getRandomFact();
        return this.sendMail(email, { fact });
    }

    private async sendMail(email: string, context: { weather?: IWeather; fact?: IFact }) {
        return await this.mailerService
            .sendMail({
                to: email,
                from: "noreply@nestjs.com",
                subject: "Weather Report & Random Fact",
                text: "",
                template: "main",
                context: { ...context },
            })
            .then((_) => true)
            .catch((err) => {
                console.log("[ERROR] - ", err);
                return false;
            });
    }

    private async getWeather(): Promise<IWeather> {
        return await this.weatherService.getCurrent(47.151726, 27.587914);
    }

    private async getRandomFact(): Promise<IFact> {
        const defaultFact: IFact = {
            question: "An error occurred while getting the fact.",
            answer: "",
        };
        return await this.factsService.getRandomFact().catch((err) => defaultFact);
    }
}
