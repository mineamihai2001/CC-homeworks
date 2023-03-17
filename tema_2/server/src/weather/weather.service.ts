import { HttpService } from "@nestjs/axios";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AxiosError } from "axios";
import { catchError, map } from "rxjs";
import { Units } from "./types/units.enum";

@Injectable()
export class WeatherService {
    private readonly apiKey: string;
    private readonly endpoint: string;

    constructor(private readonly httpService: HttpService, private readonly config: ConfigService) {
        this.apiKey = this.config.get<string>("OPEN_WEATHER_API_KEY");
        this.endpoint = this.config.get<string>("OPEN_WEATHER_ENDPOINT");
    }

    public async getCurrent(
        latitude: number,
        longitude: number,
        units: Units = Units.METRIC
    ): Promise<unknown> {
        const url: string = `${this.endpoint}?lat=${latitude}&lon=${longitude}&units=${units}&appid=${this.apiKey}`;

        return this.httpService.get(url).pipe(
            map((response) => response.data),
            catchError((e: AxiosError) => {
                throw new HttpException(
                    {
                        statusCode: e.response.status,
                        error: e.response.data,
                    },
                    HttpStatus.SERVICE_UNAVAILABLE
                );
            })
        );
    }
}
