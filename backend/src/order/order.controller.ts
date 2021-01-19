import { Body, Controller, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { request } from 'express';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { OrderService } from './order.service';

@Controller('order')
@UseGuards(AuthGuard())
export class OrderController {
    constructor(
        private orderService: OrderService
    ){}

    @Post()
    createOrder(
        @Body() products,
        @GetUser() user:User) {
            return this.orderService.createOrder( products, user);
    }
}
