import { Module } from "@nestjs/common";
import { RouterModule } from "nest-router";
import { routes } from "./routes";
import { WeatherModule } from "./weather/weather.module";
import { FactsModule } from "./facts/facts.module";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [RouterModule.forRoutes(routes), ConfigModule.forRoot(), WeatherModule, FactsModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
