import { IsEmail, IsMobilePhone, IsNumber, IsString, Length, Matches, MaxLength, MinLength } from "class-validator";

export class AuthCredentialDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsEmail()
    email:string;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    { message: 'password too weak'},
    )
    password: string;

    @IsMobilePhone('en-US')
    mobile: string;

}