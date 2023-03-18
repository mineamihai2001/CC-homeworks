import { HttpException, HttpStatus } from "@nestjs/common";
import { AxiosError } from "axios";

export class FactException extends HttpException {
    constructor(err: AxiosError) {
        super(
            {
                statusCode: err?.response?.status ?? HttpStatus.SERVICE_UNAVAILABLE,
                error: err?.response?.data ?? "Service unavailable",
            },
            HttpStatus.SERVICE_UNAVAILABLE
        );
    }
}
