import { Controller, Get, Query } from "@nestjs/common";
import { WeatherService } from "./weather.service";
import { CurrentWeatherDto } from "./dto/current-weather.dto";

@Controller("weather")
export class WeatherController {
    constructor(private readonly weatherService: WeatherService) {}

    @Get()
    public async current(@Query() dto: CurrentWeatherDto) {
        return this.weatherService.getCurrent(dto.latitude, dto.longitude);
    }
}
