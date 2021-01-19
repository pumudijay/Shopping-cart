import { Cart } from "src/cart/entity/cart.entity";
import { Checkout } from "src/order/entity/checkout.entity";
import { ProductsToCart } from "src/cart/entity/product-to-cart.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Ratings } from "./ratings.entity";

@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column("decimal", { precision: 5, scale: 2 })
    price: number;

    @Column()
    image: string;

    @Column()
    rate: number;

    @OneToMany(() => ProductsToCart, productToCart => productToCart.product)
    productsToCart!: ProductsToCart[];

    @OneToMany(() => Checkout, checkout => checkout.product)
    checkout: Checkout[];

    @OneToMany(() => Ratings, ratings => ratings.product)
    ratings: Ratings[];
}