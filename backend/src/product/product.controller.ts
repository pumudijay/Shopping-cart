import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entity/product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(
        private productService: ProductService
    ){}

    @Post()
    @UsePipes(ValidationPipe)
    createProduct(
        @Body() createProductDto:CreateProductDto){
        return this.productService.createProduct(createProductDto);
    }

    @Get()
    getAllProduct(){
        return this.productService.getAllProduct();
    }

    @Patch('/:id/rate')
    updateRating(
        @Param('id',ParseIntPipe) id: number,
        @Body('rate',ParseIntPipe) rate: number): Promise<Product> {
            return this.productService.updateRating(id, rate);
        }
    
}
