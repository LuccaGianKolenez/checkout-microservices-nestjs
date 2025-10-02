import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Shipping Service (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/shipping (POST) deve criar ordem de envio se pagamento aprovado', async () => {
    const res = await request(app.getHttpServer())
      .post('/shipping')
      .send({ orderId: '123', status: 'approved' });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('shippingId');
  });
});
