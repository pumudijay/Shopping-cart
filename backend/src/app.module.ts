import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { typeOrmConfig } from './config/typeorm.config';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    ProductModule,
    CartModule,
    OrderModule,
  ],
})
export class AppModule {}
