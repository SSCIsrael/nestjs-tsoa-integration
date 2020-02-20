import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/dogs/byName/snoopy (GET)', () => {
    return request(app.getHttpServer())
      .get('/dogs/byName/fluppy?minAge=3')
      .expect(200)
      .expect(res => res.body.length == 2);
  });
});
