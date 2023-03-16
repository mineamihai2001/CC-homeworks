import { Module } from "@nestjs/common";
import { WeatherService } from "./weather.service";
import { WeatherController } from "./weather.controller";
import { ConfigModule } from "@nestjs/config";
import { HttpModule } from "@nestjs/axios";

@Module({
    imports: [ConfigModule, HttpModule],
    controllers: [WeatherController],
    providers: [WeatherService],
})
export class WeatherModule {}
