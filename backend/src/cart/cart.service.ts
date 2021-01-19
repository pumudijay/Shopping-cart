import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { Product } from 'src/product/entity/product.entity';
import { AddProductsToCartDto } from './dto/add-products-to-cart.dto';
import { Cart } from './entity/cart.entity';
import { CartRepository } from './repository/cart.repository';
import { ProductsToCartRepository } from './repository/products-to-cart.repository';

@Injectable()
export class CartService {
    constructor(
        @InjectRepository(CartRepository)
        @InjectRepository(ProductsToCartRepository)
        private cartRepository: CartRepository,
        private productsToCartRepository: ProductsToCartRepository, 
    ){}

    async createCart(productId: number, user: User) {
        const cart = await this.cartRepository.createCart(user);
        return this.productsToCartRepository.crateProductToCart(productId, cart);
    }

    async getCart(user:User){
        const cart = await this.getCartId(user);
        return await this.productsToCartRepository.createQueryBuilder("products").select().where({cart:1}).getRawMany();
        
    }

    async getCartId(user: User): Promise<Cart>{
        return this.cartRepository.getCart(user);
    }

    async updateCount(id: number, count: number, user: User){
        
        const cart = await this.getCartId(user);

        const entity = await this.productsToCartRepository.findOne({ where : {product:id, cart:cart}})
        entity.count = count;
        await entity.save();
        return entity;
    }

    async deleteEntity(id:number, user:User): Promise<void>{
        const cart = await this.getCartId(user);
        const entity = await this.productsToCartRepository.findOne({ where : {product:id, cart:cart}});

        if(entity==null){
            throw new BadRequestException();
        }
        await this.productsToCartRepository.delete(entity.id);
    }
}
