import { Body, Controller, Get, NotImplementedException, Post, Put } from "@nestjs/common";
import { FactsService } from "./facts.service";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { CreateFactDto } from "./dto/create-fact.dto";
import { UpdateFactDto } from "./dto/update-fact.dto";

@ApiTags("Facts")
@Controller("facts")
export class FactsController {
    constructor(private readonly factsService: FactsService) {}

    @Get()
    public async all() {
        return this.factsService.getFacts();
    }

    @Get("/random")
    public async random() {
        return this.factsService.getRandomFact();
    }

    @Post()
    @ApiBody({ type: CreateFactDto })
    public async create(@Body() dto: CreateFactDto) {
        return this.factsService.createFact(dto);
    }

    @Put()
    @ApiBody({ type: UpdateFactDto })
    public async update(@Body() dto: UpdateFactDto) {
        throw new NotImplementedException();
    }
}
