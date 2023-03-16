import { Test, TestingModule } from '@nestjs/testing';
import { WeatherController } from '../src/weather/weather.controller';
import { WeatherService } from '../src/weather/weather.service';

describe('WeatherController', () => {
  let controller: WeatherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeatherController],
      providers: [WeatherService],
    }).compile();

    controller = module.get<WeatherController>(WeatherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
