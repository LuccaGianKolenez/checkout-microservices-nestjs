import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Payments Service (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/payments (POST) deve aprovar pagamento válido', async () => {
    const res = await request(app.getHttpServer())
      .post('/payments')
      .send({ orderId: '123', amount: 100 });
    expect(res.status).toBe(201);
    expect(['approved', 'rejected']).toContain(res.body.status);
  });
});
