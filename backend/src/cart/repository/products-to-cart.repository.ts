import { BadRequestException } from "@nestjs/common";
import { User } from "src/auth/user.entity";
import { Cart } from "src/cart/entity/cart.entity";
import { Product } from "src/product/entity/product.entity";
import { EntityRepository, getRepository, Repository } from "typeorm";
import { AddProductsToCartDto } from "../dto/add-products-to-cart.dto";
import { ProductsToCart } from "../entity/product-to-cart.entity";

@EntityRepository(ProductsToCart)
export class ProductsToCartRepository extends Repository<ProductsToCart> {
    async crateProductToCart(product: number, cart: Cart): Promise<ProductsToCart>{

        const found = await this.findOne({ where : {product:product, cart:cart}})

        if(found==null){
            
            const entity = new ProductsToCart();
            entity.product = product;
            entity.count = 1;
            entity.cart = cart.id;
    
            await entity.save();
            return entity;
        }
        
        throw new BadRequestException; 
    }

}