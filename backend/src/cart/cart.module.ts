import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { CartController } from './cart.controller';
import { CartRepository } from './repository/cart.repository';
import { CartService } from './cart.service';
import { ProductsToCartRepository } from './repository/products-to-cart.repository';

@Module({
  imports:[
    TypeOrmModule.forFeature([CartRepository,ProductsToCartRepository]),
    AuthModule,
  ],
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule {}
