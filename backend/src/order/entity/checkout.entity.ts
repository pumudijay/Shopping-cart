import { Product } from "src/product/entity/product.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Order } from "./order.entity";

@Entity()
export class Checkout extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Order, order => order.checkout)
    order: Order;

    @ManyToOne(() => Product, product => product)
    product: Product;

    @Column()
    count: number;
}