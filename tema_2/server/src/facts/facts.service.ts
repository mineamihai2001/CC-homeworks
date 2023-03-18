import { HttpService } from "@nestjs/axios";
import { HttpException, HttpStatus, Injectable, NotImplementedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AxiosError } from "axios";
import { catchError, firstValueFrom, map } from "rxjs";
import { IFact } from "./types/IFact";
import { FactException } from "./types/fact.exception";

@Injectable()
export class FactsService {
    private readonly endpoint: string;

    constructor(
        private readonly configService: ConfigService,
        private readonly httpService: HttpService
    ) {
        this.endpoint = this.configService.get<string>("FACTS_ENDPOINT");
    }

    public async getFacts(): Promise<Array<IFact>> {
        return this.getAllFacts();
    }

    public async getRandomFact(): Promise<IFact> {
        const facts = await this.getAllFacts();
        const index = Math.floor(Math.random() * facts.length);
        return facts.at(index);
    }

    public async createFact(fact: IFact): Promise<{ createdId: string }> {
        return await firstValueFrom(
            this.httpService
                .post(this.endpoint, JSON.stringify(fact), {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .pipe(
                    map((response) => response.data),
                    catchError((err: AxiosError) => {
                        throw new FactException(err);
                    })
                )
        );
    }

    public async updateFact(fact: IFact): Promise<unknown> {
        return await firstValueFrom(
            this.httpService
                .put(this.endpoint, JSON.stringify(fact), {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .pipe(
                    map((response) => response.data),
                    catchError((err: AxiosError) => {
                        throw new FactException(err);
                    })
                )
        );
    }

    private async getAllFacts() {
        const facts: Array<IFact> = await firstValueFrom(
            this.httpService.get(this.endpoint).pipe(
                map((response) => response.data),
                catchError((err: AxiosError) => {
                    throw new FactException(err);
                })
            )
        );
        return facts;
    }
}
