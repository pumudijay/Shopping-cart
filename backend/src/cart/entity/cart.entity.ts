import { User } from "src/auth/user.entity";
import { ProductsToCart } from "src/cart/entity/product-to-cart.entity";
import { BaseEntity, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cart extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => User)
    @JoinColumn()
    customer: User;

    @OneToMany(() => ProductsToCart, productToCart => productToCart.cart)
    cartToProduct: ProductsToCart;
}