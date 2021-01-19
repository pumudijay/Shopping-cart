import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { CheckoutRepository } from './repository/checkout.repository';
import { OrderRepository } from './repository/order.repository';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(OrderRepository)
        @InjectRepository(CheckoutRepository)
        private orderRepository: OrderRepository,
        private checkoutRepository: CheckoutRepository
    ){}

    async createOrder(products, user: User){
        const order = await this.orderRepository.createOrder(products,user);
        return this.checkoutRepository.checkout(products,order.id);
    }
}
