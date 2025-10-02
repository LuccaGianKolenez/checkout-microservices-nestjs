import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Order } from './order.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'user',
      password: 'pass',
      database: 'checkoutdb',
      entities: [Order],
      synchronize: true
    }),
    TypeOrmModule.forFeature([Order])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
