import { EntityRepository, Repository } from "typeorm";
import { CreateProductDto } from "../dto/create-product.dto";
import { Product } from "../entity/product.entity";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {

    async createProduct(createProductDto:CreateProductDto): Promise<Product>{
        const { title, price, image } = createProductDto;

        const product = new Product();
        product.title = title;
        product.price = price;
        product.image = image;
        product.rate = 0;
        await product.save();

        return product;
    }


}