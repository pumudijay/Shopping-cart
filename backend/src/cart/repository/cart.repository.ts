import { User } from "src/auth/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { Cart } from "../entity/cart.entity";

@EntityRepository(Cart)
export class CartRepository extends Repository<Cart> {
    async createCart( user:User): Promise<Cart>{

        const found = await this.findOne({ where : {customer:user.id}})
        
        if(!found){
            const cart = new Cart();
            cart.customer = user;
            await cart.save();
            
            delete(cart.customer);
            return cart;
        }
        return found;
        
    }

    async getCart(user: User): Promise<Cart> {
        const cart = await this.findOne({ where : {customer:user.id}});
        return cart;
    }
    
}