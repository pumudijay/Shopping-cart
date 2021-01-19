import { IsNotEmpty } from "class-validator";

export class CreateProductDto {

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    image: string;
}