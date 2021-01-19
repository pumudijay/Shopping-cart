import { Product } from "src/product/entity/product.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Cart } from "./cart.entity";

@Entity()
@Unique('UQ_NAMES',['cart','product'])
export class ProductsToCart extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Cart, cart => cart.cartToProduct)
    cart: number;

    @ManyToOne(() => Product, product => product.productsToCart)
    product: number;

    @Column()
    count: number;
}