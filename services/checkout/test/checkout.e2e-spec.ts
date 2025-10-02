import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Checkout Service (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/checkout (POST) deve criar um pedido', async () => {
    const res = await request(app.getHttpServer())
      .post('/checkout')
      .send({ orderId: '123', amount: 100 });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('orderId', '123');
  });
});
