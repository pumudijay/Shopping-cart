import { IsNotEmpty } from "class-validator";

export class AddProductsToCartDto {

    

    @IsNotEmpty()
    count: number;
}