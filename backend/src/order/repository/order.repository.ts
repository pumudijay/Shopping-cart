import { User } from "src/auth/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { Checkout } from "../entity/checkout.entity";
import { Order } from "../entity/order.entity";

@EntityRepository(Order)
export class OrderRepository extends Repository<Order>{
    async createOrder(products, user: User){

        
        const order = new Order();
        order.createdDate = new Date(Date.now());
        order.discount = 35.50;
        order.delivery = 50.00;
        order.customer = user;
        await order.save();

        delete(order.customer);

        
        return order;
    }

    
}