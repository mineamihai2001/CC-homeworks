import { HttpService } from "@nestjs/axios";
import { HttpException, HttpStatus, Injectable, NotImplementedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AxiosError } from "axios";
import { catchError, map } from "rxjs";

@Injectable()
export class FactsService {
    private readonly endpoint: string;

    constructor(
        private readonly configService: ConfigService,
        private readonly httpService: HttpService
    ) {
        this.endpoint = this.configService.get<string>("FACTS_ENDPOINT");
    }

    public async getRandomFact(): Promise<unknown> {
        return this.httpService.get(this.endpoint).pipe(
            map((response) => response.data),
            catchError((err: AxiosError) => {
                throw new HttpException(
                    {
                        statusCode: err.response.status,
                        error: err.response.data,
                    },
                    HttpStatus.SERVICE_UNAVAILABLE
                );
            })
        );
    }

    public async createRandomFact(): Promise<unknown> {
        return this.httpService.post(this.endpoint).pipe(
            map((response) => response.data),
            catchError((err: AxiosError) => {
                throw new HttpException(
                    {
                        statusCode: err.response.data,
                        error: err.response,
                    },
                    HttpStatus.SERVICE_UNAVAILABLE
                );
            })
        );
    }
}
