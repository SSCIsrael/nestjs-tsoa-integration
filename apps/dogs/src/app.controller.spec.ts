import { Test, TestingModule } from '@nestjs/testing';
import { DogsController } from './dogsController';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: DogsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DogsController],
      providers: [AppService],
    }).compile();

    appController = app.get<DogsController>(DogsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
