import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { Product } from 'src/product/entity/product.entity';
import { CartService } from './cart.service';
import { AddProductsToCartDto } from './dto/add-products-to-cart.dto';
import { Cart } from './entity/cart.entity';

@Controller('cart')
@UseGuards(AuthGuard())
export class CartController {
    constructor(
        private cartService: CartService
    ){}

    @Post()
    createCart(
        @Body('productId',ParseIntPipe) productId:number,
        @GetUser() user:User){
          return this.cartService.createCart(productId, user);
    }

    @Get()
    getCart( @GetUser() user:User ) {
        return this.cartService.getCart( user );
    } 
    
    @Patch('/:id/count')
    updateCount(
        @Param('id',ParseIntPipe) id:number,
        @Body('count',ParseIntPipe) count:number,
        @GetUser() user:User){
            return this.cartService.updateCount(id, count, user);
    }

    @Delete('/:id')
    delete(
        @Param('id', ParseIntPipe) id:number,
        @GetUser() user:User): Promise<void> {
            return this.cartService.deleteEntity(id,user);
    }
}
