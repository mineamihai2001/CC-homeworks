import { Controller } from '@nestjs/common';
import { FactsService } from './facts.service';

@Controller('facts')
export class FactsController {
  constructor(private readonly factsService: FactsService) {}
}
