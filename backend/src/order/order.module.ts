import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { OrderController } from './order.controller';
import { OrderRepository } from './repository/order.repository';
import { OrderService } from './order.service';
import { CheckoutRepository } from './repository/checkout.repository';

@Module({
  imports:[
    TypeOrmModule.forFeature([OrderRepository,CheckoutRepository]),
    AuthModule
  ],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
