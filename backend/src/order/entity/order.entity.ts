import { User } from "src/auth/user.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Checkout } from "./checkout.entity";

@Entity()
export class Order extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdDate: Date;

    @Column("decimal", { precision: 5, scale: 2 })
    discount: number;

    @Column("decimal", { precision: 5, scale: 2 })
    delivery: number;

    @ManyToOne(() => User, user => user.order)
    customer: User;

    @OneToMany(() => Checkout, checkout => checkout.order)
    checkout: Checkout[];
}