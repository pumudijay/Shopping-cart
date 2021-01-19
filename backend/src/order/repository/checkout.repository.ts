import { EntityRepository, Repository } from "typeorm";
import { Checkout } from "../entity/checkout.entity";

@EntityRepository(Checkout)
export class CheckoutRepository extends Repository<Checkout> {
    async checkout(products, orderId){

        const checkout = new Checkout();

        await products.forEach(entity => {
            checkout.product = entity.productId;
            checkout.count = entity.count;
            checkout.order = orderId;
            checkout.save();
        });

        return;
    }
}