import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entity/product.entity';
import { ProductRepository } from './repository/product.repository';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductRepository)
        private productRepository: ProductRepository, 
    ){}

    async createProduct(createProductDto:CreateProductDto): Promise<Product> {
        return this.productRepository.createProduct(createProductDto);
    }

    async getAllProduct(): Promise<Product[]>{
        return this.productRepository.find();
    }

    async updateRating(id: number, rate: number): Promise<Product>{
        const product = await this.productRepository.findOne(id);
        if(!product){
            throw new NotFoundException('This Product is not available' );
        }

        product.rate = rate;
        await product.save();
        return product;

    }
}
