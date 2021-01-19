import { User } from "src/auth/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class Ratings extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.ratings)
    customer: number;

    @ManyToOne(() => Product, product => product.ratings)
    product: number;

    @Column()
    count: number;
}