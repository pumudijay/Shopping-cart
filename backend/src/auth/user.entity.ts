import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Order } from "src/order/entity/order.entity";
import { Ratings } from "src/product/entity/ratings.entity";

@Entity()
@Unique(['username','email'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    username:string;

    @Column()
    email:string;

    @Column()
    mobile:string;

    @Column()
    password:string;

    @Column()
    salt:string;
    
    @OneToMany(() => Order, order => order.customer)
    order: Order[];

    @OneToMany(() => Ratings, ratings => ratings.customer)
    ratings: Ratings[];

    async validatePassword(password: string): Promise<boolean> {
        const hash = await bcrypt.hash(password, this.salt);
        return hash === this.password;
    }
}